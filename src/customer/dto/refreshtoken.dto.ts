import { IsEmail, IsString, Length, IsNotEmpty, IsNumber } from 'class-validator';
export class RefreshTokenPayLoad {
    @IsString()@IsNotEmpty()
    refresh_token:string;
    @IsNumber()@IsNotEmpty()
    user_id:number;
}
