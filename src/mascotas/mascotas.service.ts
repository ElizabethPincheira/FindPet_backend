import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mascota } from './entities/mascota.entity';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { Usuarios } from '../usuarios/entities/usuario.entity';

@Injectable()
export class MascotasService {
  constructor(
    @InjectRepository(Mascota)
    private readonly mascotaRepo: Repository<Mascota>,

    @InjectRepository(Usuarios)
    private readonly usuarioRepo: Repository<Usuarios>,
  ) {}

  async create(dto: CreateMascotaDto, usuarioId: number) {
    const usuario = await this.usuarioRepo.findOneBy({
      usuario_id: usuarioId,
    });

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    const mascota = this.mascotaRepo.create({
      ...dto,
      usuario,
    });

    return this.mascotaRepo.save(mascota);
  }

  findAll() {
    return this.mascotaRepo.find({
      relations: ['usuario'],
    });
  }
}
