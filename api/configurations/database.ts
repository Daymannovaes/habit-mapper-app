import { config } from 'dotenv';

export function getOrmConfig(
  environment = 'development',
  entities: Array<any>,
): any {
  config();

  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) as number,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [...entities],
    synchronize: environment === 'development',
  };
}
