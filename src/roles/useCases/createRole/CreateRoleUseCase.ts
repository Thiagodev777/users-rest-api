import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'

interface CreateRoleDTO {
  name: string
}

export class CreateRoleUseCase {
  constructor(private readonly rolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(name)
    if (roleAlreadyExists) {
      throw new AppError('Role already exists', 400)
    }
    return this.rolesRepository.create({ name })
  }
}
