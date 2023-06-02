import 'dotenv/config'
import { DataSource } from 'typeorm'
import { CreateRolesTable1685715783861 } from './migrations/1685715783861-CreateRolesTable'
import { Role } from '@roles/entities/Role'

const AppDataSource = new DataSource({
  type: process.env.DEV_DB_TYPE as any,
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT as any,
  username: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_DATABASE,
  entities: [Role],
  migrations: [CreateRolesTable1685715783861],
})

export { AppDataSource }
