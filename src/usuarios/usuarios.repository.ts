// usuarios.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './entities/usuario.entity';

@Injectable()
export class UsuariosRepository {
  constructor(
    @InjectRepository(Usuarios)
    private readonly repo: Repository<Usuarios>,
  ) {}

  create(data: Partial<Usuarios>) {
    const usuario = this.repo.create(data);
    return this.repo.save(usuario);
  }

  findByEmail(correo: string) {
    return this.repo.findOne({
      where: { correo_electronico: correo },
    });
  }

  findAll() {
    return this.repo.find({
      relations: ['mascotas'],
    });
  }

  findById(id: number) {
    return this.repo.findOne({
      where: { usuario_id: id },
      relations: ['mascotas'],
    });
  }

  save(usuario: Usuarios) {
    return this.repo.save(usuario);
  }

  remove(usuario: Usuarios) {
    return this.repo.remove(usuario);
  }
}
