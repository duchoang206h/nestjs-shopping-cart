import { Injectable, Inject, HttpException ,HttpStatus, HttpCode } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../entities';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto'
import * as bcrypt from 'bcrypt';
import { CUSTOMER_REPOSITORY } from '../constants'
@Injectable()
export class CustomerService {
    constructor( 
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepository: Repository<Customer>){};
    async findOne( email:string): Promise<Customer>{
       try {
           const result = await this.customerRepository.findOne({
               select:["email","password"],
               where:{
                   email: email
               },
           })
           return result;
       } catch (error) {
           console.log(error);
           
       }
   }
   async create(newCustomer:CreateCustomerDto):Promise<boolean|Customer> {
    try {
        console.log("newCustomer", newCustomer);
        const validCustomer = await this.customerRepository.find({
            where:{
                email: newCustomer.email
            }
        })
        console.log("Valid Customer",validCustomer);
        if(validCustomer.length) return ;
        const saltOrRounds = 10;
        newCustomer.password = await bcrypt.hash(newCustomer.password,saltOrRounds)
        const result = await this.customerRepository.save(newCustomer);
        console.log("result",result);
        return result;
    } catch (error) {
        console.log(error);
        throw new HttpException({
               status: HttpCode(500),
               error: 'Internal server error',
        },500)
    }
   }
}