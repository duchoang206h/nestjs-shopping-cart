import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { CustomerService } from '../customer/customer.service';
import { SigninDto, CreateCustomerDto } from '../customer/dto'
import * as bcrypt from 'bcrypt';
import { Customer } from '../entities'
import { JWT_SECRET, TOEKEN_EXPIRED } from '../config/key'
import * as jwt from 'jsonwebtoken'
@Injectable( )
export class AuthService{
    constructor(private readonly custemerService: CustomerService){
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
    async signin(customer: SigninDto):Promise< Customer & { token: string}> {
        try {
            const result = await this.custemerService.findOne(customer.email);
            if(!result) return null;
            const isValidPass = await bcrypt.compare(customer.password, result.password);
            if(!isValidPass) return null;
            const token =  await jwt.sign({
                data:{
                    id: result.id,
                    email: result.email
                }
            }, JWT_SECRET, { expiresIn: TOEKEN_EXPIRED})
            const response = Object.assign(result, {token: token})
            return response
        } catch (error) {
            console.log(error);
            return null
        }
       
    }
}