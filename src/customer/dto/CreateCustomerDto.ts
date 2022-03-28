import { IsEmail,IsString,Length, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCustomerDto {
    @IsEmail()@IsNotEmpty()
    @ApiProperty()
    email:string;

    @IsString()@IsNotEmpty()@Length(6,30)
    @ApiProperty()
    password:string;

    @IsString()
    @ApiProperty()
    phone_number: string

    @IsString()
    @ApiProperty()
    address: string
    
    @IsString()
    @ApiProperty()
    fullname: string
}
