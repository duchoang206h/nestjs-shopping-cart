import { IsEmail,IsString,Length, IsNotEmpty } from 'class-validator';
export class CreateCustomerDto {
    @IsEmail()@IsNotEmpty()
    email:string;
    @IsString()@IsNotEmpty()@Length(6,30)
    password:string;
    @IsString()
    phone_number: string
    @IsString()
    address: string
    @IsString()
    fullname: string
}
