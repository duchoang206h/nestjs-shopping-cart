import { Body, Controller, Get, Request,Req, Post, HttpException , HttpStatus, UseInterceptors } from "@nestjs/common";
import { ClassSerializerInterceptor } from '@nestjs/common'
import { SigninDto, CreateCustomerDto, RefreshTokenPayLoad   } from "../customer/dto";
import { AuthService } from "./auth.service";
import { RefreshToken } from "src/entities";

@Controller('auth')
export class AuthController{
constructor(private AuthService: AuthService){
}
@UseInterceptors(ClassSerializerInterceptor)
@Post("signin")

async signin (@Body() dto:SigninDto) {
const result = await  this.AuthService.signin(dto);
if(!result) throw new HttpException({
    status:HttpStatus.INTERNAL_SERVER_ERROR,

}, HttpStatus.INTERNAL_SERVER_ERROR)
return result;
}

@Post("signup")
async signup(@Body() newUser: CreateCustomerDto){
    const result =  await this.AuthService.signup(newUser);
    if(!result) {
        throw new HttpException({
            status: HttpStatus.CONFLICT,
            error: 'User already existed!',
          }, HttpStatus.CONFLICT);
    }
    return result;
}
@Post("refreshtoken")
async RefresToken(@Body() payload: RefreshTokenPayLoad){
    const result = await this.AuthService.refreshToken(payload.refresh_token, payload.user_id);
    if(!result) throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: "refresh_token is not exact"
    }, HttpStatus.BAD_REQUEST)
    return result;
}


}
