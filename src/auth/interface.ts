import { Customer} from '../entities'
import { JwtPayload} from 'jsonwebtoken'
export interface SigninResponse{
    user: Customer,
    token: string,
    refreshToken: string
}
export interface PayLoad {
user_id: number,
email: string
}
export interface DecodePayload extends JwtPayload{
    user_id: number,
    email: string
}