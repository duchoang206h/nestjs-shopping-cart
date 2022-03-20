import { IsEmail,IsString,Length, IsNotEmpty } from 'class-validator';
export class CreateUser {
    @IsEmail()@IsNotEmpty()
    email:string;
    @IsString()@IsNotEmpty()@Length(6,30)
    password:string;
    @IsString()
    number: string
    @IsString()
    address: string
}
