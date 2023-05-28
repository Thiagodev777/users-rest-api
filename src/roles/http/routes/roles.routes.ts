import { Router } from 'express'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { createRoleController } from '@roles/useCases/createRole/index'
const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.get('/', (req, res) => {
  const roles = rolesRepository.findAll()
  return res.json(roles)
})

rolesRouter.post('/', (req, res) => {
  return createRoleController.handle(req, res)
})

export { rolesRouter }
