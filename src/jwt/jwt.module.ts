import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service'
import { refreshtokenProviders} from './refreshtoken.provider'
import { DatabaseModule } from '../database/database.module'
@Module({
    imports:[DatabaseModule],
    providers:[...refreshtokenProviders, JwtService],
    exports:[JwtService]
})
export class JwtModule {}
