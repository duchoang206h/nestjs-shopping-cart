import { IsEmail, IsString, Length, IsNotEmpty } from 'class-validator';
export class SigninDto {
    @IsEmail()@IsNotEmpty()
    email:string;
    @IsString()@IsNotEmpty()@Length(6,30)
    password:string;
}
