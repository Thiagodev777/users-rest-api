import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import 'dotenv/config'
import { routes } from './routes/routes'
import { AppError } from '@shared/errors/AppError'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
      code: error.statusCode,
    })
  }
  console.log(error)
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    code: 500,
  })
})

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT} ⭐`),
)
