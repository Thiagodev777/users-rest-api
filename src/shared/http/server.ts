import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import 'dotenv/config'
import { routes } from './routes/routes'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT} ⭐`),
)
