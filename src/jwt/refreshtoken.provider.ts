import { Connection } from 'typeorm';
import { RefreshToken } from '../entities';
import { REFRESHTOKEN_REPOSITORY, DATABASE_CONNECTION } from '../constants'
export const refreshtokenProviders = [
  {
    provide: REFRESHTOKEN_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(RefreshToken),
    inject: [DATABASE_CONNECTION],
  },
];