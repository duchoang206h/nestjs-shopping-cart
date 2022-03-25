import { Module , Global} from '@nestjs/common';
import { CustomerController } from './customer.controller'
import { CustomerService } from './customer.service'
import { Customer } from '../entities'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseModule } from '../database/database.module'
import { customerProviders } from './customer.provider'
@Module({
    imports: [ DatabaseModule ],
    controllers:[CustomerController],
    providers:[...customerProviders, CustomerService],
    exports: [CustomerService]
})
export class CustomerModule {}
