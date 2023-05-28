import { Router } from 'express'
import { createRoleController } from '@roles/useCases/createRole/index'
import { listRolesController } from '@roles/useCases/listRoles/index'
const rolesRouter = Router()

rolesRouter.get('/', (req, res) => {
  return listRolesController.handle(req, res)
})

rolesRouter.post('/', (req, res) => {
  return createRoleController.handle(req, res)
})

export { rolesRouter }
