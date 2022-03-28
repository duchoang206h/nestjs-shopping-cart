import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import {InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm'
import { CustomerService } from '../customer/customer.service';
import { SigninDto, CreateCustomerDto } from '../customer/dto'
import * as bcrypt from 'bcrypt';
import { Customer, RefreshToken } from '../entities'
import { SigninResponse } from './interface'
import { JwtService } from '../jwt/jwt.service'
@Injectable( )
export class AuthService{
    constructor(private readonly custemerService: CustomerService,
    private readonly jwtService: JwtService
    ){
    }
    async signup(newCustomer: CreateCustomerDto): Promise <Customer>{
        try {
            const result = await this.custemerService.create(newCustomer);
            if(!result ) {
               return null
            };
            return result

        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async signin(customer: SigninDto):Promise< Customer & { access_token: string, refresh_token: string} > {
        try {
            const result = await this.custemerService.findOne(customer.email);
            if(!result) return null;
            const isValidPass = await bcrypt.compare(customer.password, result.password);
            if(!isValidPass) return null;
            const tokens = await this.jwtService.signToken( {email: result.email, user_id:result.id})
            return {...result, ... tokens }
        } catch (error) {
            console.log(error);
            return null
        }
    }
    async refreshToken(refreshToken: string, user_id: number): Promise<any>{
        try {
            const result = await this.jwtService.refreshtoken(refreshToken,user_id);
            if(!result) return null;
            return result;
        } catch (error) {
            console.log(error);
            return null
        }
    }
}