import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUser } from './dto'
import * as bcrypt from 'bcrypt';
import { USER_REPOSITORY } from '../constants'
@Injectable()
export class UserService{
    constructor( 
    @Inject(USER_REPOSITORY)
    private readonly userRepository: Repository<User>){};
    async findOne( email:string): Promise<User>{
       try {
           const result = await this.userRepository.findOne({
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
   async create(newUser:CreateUser):Promise<boolean|User> {
    try {
        console.log("newUser", newUser);
        const validUser = await this.userRepository.find({
            where:{
                email: newUser.email
            }
        })
        console.log("Valid user",validUser);
        if(validUser.length) return ;
        const saltOrRounds = 10;
        newUser.password = await bcrypt.hash(newUser.password,saltOrRounds)
        const result = await this.userRepository.save(newUser);
        console.log("result",result);
        return result;
    } catch (error) {
        console.log(error);
    }
   }
}