import { Body, Controller, Get, Request,Req, Post, HttpException , HttpStatus } from "@nestjs/common";
import { SigninDto, CreateCustomerDto  } from "src/customer/dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
constructor(private AuthService: AuthService){
}
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
}