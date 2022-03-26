import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm'
import { IDatabaseConfig } from './database.config.interface';
import {DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} from './key'
dotenv.config();
export const databaseConfig: ConnectionOptions = {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: Number(DB_PORT),
    type: DB_DIALECT as "postgres",
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
}