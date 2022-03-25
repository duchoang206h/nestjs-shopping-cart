import { Body, Controller, Get, Request,Req, Post, HttpException , HttpStatus } from "@nestjs/common";
import { SigninDto,CreateUser  } from "src/customer/dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
constructor(private AuthService: AuthService){
}
@Post("signin")
signin (@Body() dto:SigninDto) {
return this.AuthService.signin(dto);
}
@Post("signup")
async signup(@Body() newUser: CreateUser){
    const result =  await this.AuthService.signup(newUser);
    if(!result) {
        throw new HttpException({
            status: HttpStatus.CONFLICT,
            error: 'User already existed!',
          }, HttpStatus.CONFLICT);
    }
    return result;
}
}