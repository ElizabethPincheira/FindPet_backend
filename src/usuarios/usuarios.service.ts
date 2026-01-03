import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsuariosService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateUsuarioDto: UpdateUsuarioDto) {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) { }

  async create(dto: CreateUsuarioDto) {
    console.log('DTO recibido:', dto);

    const hash = await bcrypt.hash(dto.contrasena, 10);

    const usuario = this.usuarioRepo.create({
      ...dto,
      contrasena: hash,
      tipo_usuario: dto.tipo_usuario ?? 'comun',
    });

    return this.usuarioRepo.save(usuario);
  }

  

}
