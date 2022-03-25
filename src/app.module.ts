import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { DatabaseModule } from './database/database.module';
//import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductModule } from './product/product.module';
@Module({
  imports: [DatabaseModule, AuthModule, CustomerModule, AdminModule, ProductModule,
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
