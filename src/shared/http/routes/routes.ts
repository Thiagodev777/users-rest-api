import { Router } from 'express'
const routes = Router()

routes.get('/', (req, res) => {
  res.json({ msg: 'Olá Devs!!' })
})

export { routes }
