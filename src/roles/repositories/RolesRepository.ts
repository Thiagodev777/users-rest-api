import { Role } from '@roles/entities/Role'

interface CreateRoleDTO {
  name: string
}

export class RolesRepository {
  private roles: Role[]
  private static INSTANCE: RolesRepository

  private constructor() {
    this.roles = []
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository()
    }
    return RolesRepository.INSTANCE
  }

  findAll(): Role[] {
    return this.roles
  }

  findByName(name: string): Role | undefined {
    return this.roles.find(role => role.name === name)
  }

  create({ name }: CreateRoleDTO): Role {
    const role = new Role()
    Object.assign(role, { name: name, created_at: new Date() })
    this.roles.push(role)
    return role
  }
}
