import { Connection } from 'typeorm'
import { PRODUCT_REPOSITORY } from './constant'
import { DATABASE_CONNECTION } from '../database/constant'
import { Book } from '../entities'
export const productProviders = [{
    provide: PRODUCT_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Book),
    inject: DATABASE_CONNECTION
}]