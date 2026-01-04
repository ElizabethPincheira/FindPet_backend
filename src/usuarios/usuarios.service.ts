import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Usuarios } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuarioRepo: Repository<Usuarios>,
  ) { }

  async create(dto: CreateUsuarioDto) {
    const hash = await bcrypt.hash(dto.contrasena, 10);

    const usuario = this.usuarioRepo.create({
      ...dto,
      contrasena: hash,
      tipo_usuario: dto.tipo_usuario ?? 'comun',
    });

    return this.usuarioRepo.save(usuario);
  }

  async findAll() {
    return this.usuarioRepo.find({
      relations: ['mascotas'],
    });
  }

  async findOne(id: number) {

    console.log(id);
    const usuario = await this.usuarioRepo.findOne({
      where: { usuario_id: id },
      relations: ['mascotas'],
    });

    console.log(usuario);

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    return usuario;
  }


  async update(id: number, dto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id);

    Object.assign(usuario, dto);

    return this.usuarioRepo.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    return this.usuarioRepo.remove(usuario);
  }
}
