import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../database/database.module'
import { UserModule } from '../customer/customer.module'
@Module({
    imports:[UserModule, DatabaseModule],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule {}
