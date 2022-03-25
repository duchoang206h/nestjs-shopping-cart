import { Repository } from 'typeorm'
import { Book } from '../entities'
import { Injectable,Inject } from '@nestjs/common'
import { PRODUCT_REPOSITORY } from './constant'
@Injectable()
export class ProductService{
    constructor(@Inject(PRODUCT_REPOSITORY) private readonly product: Repository<Book>){
    }
    async findById(id: string): Promise<Book>{
        try {
            const result = await this.product.findOne({
                where:{
                    id: id
                },
            })
            return result
        } catch (error) {
            
        }
    }

}