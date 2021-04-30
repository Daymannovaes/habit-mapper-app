import { config } from 'dotenv';

export function getOrmConfig(environment = 'development', entities: Array<any>) {
  config({
    path: `${__dirname}/.env.${environment}`
  })
  console.log(`env: ${__dirname}/.env.${environment}`);

  return {
    type: 'postgres' as 'postgres',
    host: process.env.DATABASE_HOST as string,
    port: parseInt(process.env.DATABASE_PORT as string) as number,
    username: process.env.DATABASE_USERNAME as string,
    password: process.env.DATABASE_PASSWORD as string,
    database: process.env.DATABASE_NAME as string,
    entities: [
      ...entities,
    ],
    synchronize: environment === 'development' ? true : false
  }
};
