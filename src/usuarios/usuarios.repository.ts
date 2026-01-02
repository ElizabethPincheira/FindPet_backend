import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosRepository {
  constructor(
    @InjectRepository(Usuario)
    private readonly repo: Repository<Usuario>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findById(usuario_id: number) {
    return this.repo.findOne({ where: { usuario_id } });
  }

  create(user: Partial<Usuario>) {
    return this.repo.save(user);
  }
}
