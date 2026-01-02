import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosRepository {
  obtenerMensaje() {
    return 'hola desde repository';
  }
}

