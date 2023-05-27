import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ msg: 'Olá Devs' })
})

app.listen(8089, () => console.log(`Server started on port ${8089} ⭐`))
