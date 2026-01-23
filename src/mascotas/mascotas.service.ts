import { Injectable } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UsuariosRepository } from 'src/usuarios/usuarios.repository';
import { MascotaRepository } from './mascotas.repository';


@Injectable()
export class MascotasService {

  constructor(
    private readonly mascotaRepo: MascotaRepository,
    private readonly usuariosRepo: UsuariosRepository,
  ) { }

  async findAll() {
    return this.mascotaRepo.find();
  }

  async findMisMascotas(usuarioId: number) {
    return this.mascotaRepo.findByUsuario(usuarioId);
  }

  async create(dto: CreateMascotaDto, usuarioId: number) {

    if (!usuarioId) {
      throw new Error('Usuario ID es requerido');
    }


    const usuario = await this.usuariosRepo.findById(usuarioId);


    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    return this.mascotaRepo.createMascota(dto, usuario);
  }

  

}
