import 'dotenv/config'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
  type: process.env.DEV_DB_TYPE as any,
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT as any,
  username: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_DATABASE,
  entities: [],
  migrations: [],
})

export { AppDataSource }
