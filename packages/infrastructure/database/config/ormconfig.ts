export default {
  type: "postgres" as 'postgres',
  host: "localhost",
  port: 5432,
  username: "root",
  password: "habitmapperpg",
  database: "root",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true
}
