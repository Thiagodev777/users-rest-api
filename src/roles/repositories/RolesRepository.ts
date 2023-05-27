import { Role } from '@roles/entities/Role'

interface CreateRoleDTO {
  name: string
}

export class RolesRepository {
  private roles: Role[]

  constructor() {
    this.roles = []
  }

  create({ name }: CreateRoleDTO) {
    const role = new Role()
    Object.assign(role, { name: name, created_at: new Date() })
    this.roles.push(role)
    return role
  }
}
