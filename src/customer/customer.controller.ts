import { Controller,Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service'
//import {contr} from '@nestjs/core'
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService){}

}