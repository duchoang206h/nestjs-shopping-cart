import { Body, Controller, Get, Request,Req, Post } from "@nestjs/common";
import { SigninDto,CreateUser  } from "src/user/dto";
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
signup(@Body() newUser: CreateUser){
    return this.AuthService.signup(newUser)
}
}