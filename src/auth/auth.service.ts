import { Injectable } from "@nestjs/common";
import { UserService } from '../user/user.service';
import { SigninDto,CreateUser } from '../user/dto'
import * as bcrypt from 'bcrypt';
import { User} from '../user/user.entity'
@Injectable( )
export class AuthService{
    constructor(private readonly userService: UserService){
    }
    async signup(newUser: CreateUser): Promise <boolean| User>{
        try {
            const result = await this.userService.create(newUser);
            if(!result ) return false;
            return result

        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async signin(user:SigninDto):Promise<boolean | User> {
        try {
            const isExist = await this.userService.findOne(user.email);
            console.log("Checking", isExist);
            if(!isExist) return false;
            const isValidPass = await bcrypt.compare(user.password, isExist.password);
            if(!isValidPass) return false;
            return isExist;
        } catch (error) {
            console.log(error);
            return false
        }
       
    }
}