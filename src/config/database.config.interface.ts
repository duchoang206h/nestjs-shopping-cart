
export interface IDatabaseConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number|string;
    type: string;
    entities:[any]
    synchronize:boolean
}