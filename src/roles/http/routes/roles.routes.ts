import { Router } from 'express'

import { RolesRepository } from '@roles/repositories/RolesRepository'
const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.get('/', (req, res) => {
  const roles = rolesRepository.findAll()
  return res.json(roles)
})

rolesRouter.post('/', (req, res) => {
  const { name } = req.body
  const role = rolesRepository.create({ name })
  return res.status(201).json(role)
})

export { rolesRouter }
