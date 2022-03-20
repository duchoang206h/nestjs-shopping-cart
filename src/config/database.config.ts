import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm'
import { IDatabaseConfig } from './database.config.interface';
dotenv.config();
export const databaseConfig: ConnectionOptions = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    type: process.env.DB_DIALECT as "postgres",
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
}