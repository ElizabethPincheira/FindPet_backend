import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mascota } from './entities/mascota.entity';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { Usuarios } from '../usuarios/entities/usuario.entity';

@Injectable()
export class MascotaRepository {
  constructor(
    @InjectRepository(Mascota)
    private readonly repo: Repository<Mascota>,
  ) {}

  find() {
    return this.repo.find({ 
      relations: ['usuario'],
      select: {
        mascota_id: true,
        nombre: true,
        tipo_mascota: true,
        raza: true,
        color: true,
        descripcion: true,
        numero_chip: true,
        activo: true,
      }
    });
  }

  createMascota(dto: CreateMascotaDto, usuario: Usuarios) {
    const mascota = this.repo.create({
      ...dto,
      usuario,
    });
    return this.repo.save(mascota);
  }


  findByUsuario(usuarioId: number) {
    return this.repo.find({
      where: {
        usuario: { usuario_id: usuarioId },
      },
      select: {
        mascota_id: true,
        nombre: true,
        tipo_mascota: true,
        raza: true,
        color: true,
        descripcion: true,
        numero_chip: true,
        activo: true,
      }
    });
  }

}
