import { createConnection } from 'typeorm';
import { databaseConfig } from '../config/database.config'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(databaseConfig)
    },
];
