import { Connection } from 'typeorm';
import { Customer } from '../entities';
import { CUSTOMER_REPOSITORY, DATABASE_CONNECTION } from '../constants'
export const customerProviders = [
  {
    provide: CUSTOMER_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Customer),
    inject: [DATABASE_CONNECTION],
  },
];