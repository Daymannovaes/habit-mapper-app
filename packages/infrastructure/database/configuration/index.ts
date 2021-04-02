import { config } from 'dotenv';

enum Enviroment {
  development = 'development',
  test = 'test',
  production = 'production',
}

export function getOrmConfig(environment: Enviroment = Enviroment.development) {
  config({
    path: `${__dirname}/.env.${environment}`
  })
  console.log(`${__dirname}/.env.${environment}`);

  return {
    type: 'postgres' as 'postgres',
    host: process.env.DATABASE_HOST as string,
    port: parseInt(process.env.DATABASE_PORT as string) as number,
    username: process.env.DATABASE_USERNAME as string,
    password: process.env.DATABASE_PASSWORD as string,
    database: process.env.DATABASE_NAME as string,
    entities: [
      "dist/**/*.entity{.ts,.js}",
      "node_modules/@habit-mapper-app/entities/**/*.entity{.ts,.js}", // @todo check to see it's correct
    ],
    synchronize: environment === 'development' ? true : false
  }
};
