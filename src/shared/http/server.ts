import 'dotenv/config'
import 'reflect-metadata'
import { AppDataSource } from '../database/index'
import { app } from './app'

AppDataSource.initialize()
  .then(() => {
    console.log('== Data Source has been initialized ==')
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port ${process.env.PORT} ⭐`),
    )
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err.message)
  })
