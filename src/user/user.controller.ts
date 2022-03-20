import { Controller,Get } from '@nestjs/common';
import { UserService } from './user.service'
//import {contr} from '@nestjs/core'
@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
@Get()
hello(){
    return "Hello";
}
}