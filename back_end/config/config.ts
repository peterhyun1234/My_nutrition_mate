import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
  username: string,
  password: string,
  database: string,
  host: string,
  [key: string]: string,
}
interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}
const config: IConfigGroup = {
  "development": {
    "username": process.env.DB_USER!,
    "password": process.env.DB_PASS!,
    "database": "mnm",
    "host": process.env.DB_HOST!,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER!,
    "password": process.env.DB_PASS!,
    "database": "mnm",
    "host": process.env.DB_HOST!,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER!,
    "password": process.env.DB_PASS!,
    "database": "mnm",
    "host": process.env.DB_HOST!,
    "dialect": "mysql"
  }
};

export default config;