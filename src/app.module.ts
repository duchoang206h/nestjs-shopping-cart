import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { DatabaseModule } from './database/database.module';
//import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import {User} from './user/user.entity'
@Module({
  imports: [DatabaseModule, AuthModule, UserModule, AdminModule,
 /*  TypeOrmModule.forRoot({
    host:"localhost",
    type:"postgres",
   // database:"test",
    entities:[User],
    username:'postgres',
    port: 5432,
    password:'password',
    synchronize: true
  }) */
  
],
})
export class AppModule {}
