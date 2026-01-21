import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuariosRepository } from './usuarios.repository';

@Injectable()
export class UsuariosService {
  constructor(
    private readonly usuariosRepository: UsuariosRepository,
  ) {}

  async create(dto: CreateUsuarioDto) {
    const existe = await this.usuariosRepository.findByEmail(
      dto.correo_electronico,
    );

    if (existe) {
      throw new BadRequestException('El correo ya está registrado');
    }

    const hash = await bcrypt.hash(dto.contrasena, 10);

    return this.usuariosRepository.create({
      ...dto,
      contrasena: hash,
      tipo_usuario: dto.tipo_usuario ?? 'comun',
    });
  }

  async findAll() {
    return this.usuariosRepository.findAll();
  }

  async findOne(id: number) {
    const usuario = await this.usuariosRepository.findById(id);

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    return usuario;
  }

  async update(id: number, dto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id);
    Object.assign(usuario, dto);
    return this.usuariosRepository.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    return this.usuariosRepository.remove(usuario);
  }
}
