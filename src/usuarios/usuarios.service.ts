import { Injectable } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';

@Injectable()
export class UsuariosService {
  constructor(
    private readonly usuariosRepository: UsuariosRepository,
  ) {}

   obtenerUsuarios() {
    return this.usuariosRepository.obtenerTodos();
  }
}
