import { createConnection } from 'typeorm';
import { databaseConfig } from '../config/database.config'
import { DATABASE_CONNECTION } from './constant'
export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => await createConnection(databaseConfig)
    },
];
