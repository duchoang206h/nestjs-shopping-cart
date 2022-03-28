
import { Repository } from 'typeorm'
import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository} from '@nestjs/typeorm'
import { RefreshToken } from '../entities/refreshToken.entity'
import { PayLoad, DecodePayload } from '../auth/interface'
import * as jwt from 'jsonwebtoken'
import { REFRESHTOKEN_REPOSITORY} from '../constants'
import { JWT_SECRET, TOEKEN_EXPIRED, REFRESH_TOKEN_SECRET, REFRESHTOKEN_TOEKEN_EXPIRED} from '../config/key'
@Injectable()
export class JwtService {
    constructor(
    @Inject(REFRESHTOKEN_REPOSITORY)
    private readonly refreshTokenRepository: Repository<RefreshToken>,){
    }
    async signToken(payload: PayLoad): Promise<{ access_token: string, refresh_token: string}>{
        try {
            await this.refreshTokenRepository.delete({"user_id": payload.user_id})
            const access_token =  jwt.sign({
                data: payload
            }, JWT_SECRET, { expiresIn: TOEKEN_EXPIRED})
            const refresh_token = jwt.sign({
                data: payload
            }, REFRESH_TOKEN_SECRET, { expiresIn: REFRESHTOKEN_TOEKEN_EXPIRED})
            const newRefreshTokenRepo = await this.refreshTokenRepository.save({
                refreshtoken: refresh_token,
                user_id: payload.user_id
            })
            return { access_token, refresh_token}
        } catch (error) {
            console.log(error);
        }
       
    }
   
    async refreshtoken(refreshToken: string, user_id: number): Promise<any>{
        try {
            const decoded  = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) as DecodePayload;
            console.log("decoded", decoded);
            if(!decoded) return false;
            const result = await this.refreshTokenRepository.findOne({
                where:{
                    refreshtoken: refreshToken
                }
            })
            console.log("result", result);
            if(!result || decoded.data.user_id != user_id) return false;
            await this.refreshTokenRepository.delete({"refreshtoken": refreshToken})
            return this.signToken(decoded.data)

        } catch (error) {
            return null;
        }
    }
}