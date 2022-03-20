import { Module , Global} from '@nestjs/common';
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { User } from './user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseModule } from '../database/database.module'
import { userProviders } from './user.provider'
@Module({
    imports: [ DatabaseModule ],
    controllers:[UserController],
    providers:[...userProviders, UserService],
    exports: [UserService]
})
export class UserModule {}
