import { Role } from '@roles/entities/Role'
import { CreateRoleDTO } from './RolesRepository'

export interface IRolesRepository {
  findAll: () => Role[]
  findByName: (name: string) => Role
  create: ({ name }: CreateRoleDTO) => Role
}
