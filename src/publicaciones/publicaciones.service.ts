import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publicacion } from './entities/publicacion.entity';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { Mascota } from 'src/mascotas/entities/mascota.entity';

@Injectable()
export class PublicacionesService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly publicacionRepo: Repository<Publicacion>,
    @InjectRepository(Mascota)
    private readonly mascotasRepo: Repository<Mascota>,
  ) {}

  async create(dto: CreatePublicacionDto, usuario_id: number): Promise<Publicacion> {
    const publicacion = this.publicacionRepo.create({
      ...dto,
      usuario_id,
    });

    return await this.publicacionRepo.save(publicacion);
  }

  async findAll(): Promise<Publicacion[]> {
    return await this.publicacionRepo.find({
      relations: ['mascota', 'usuario'],
      order: { fecha_creacion: 'DESC' },
    });
  }

  async findByMascota(mascota_id: number): Promise<Publicacion[]> {
    return await this.publicacionRepo.find({
      where: { mascota_id },
      relations: ['mascota', 'usuario'],
      order: { fecha_creacion: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Publicacion | null> {
    return await this.publicacionRepo.findOne({
      where: { publicacion_id: id },
      relations: ['mascota', 'usuario'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.publicacionRepo.delete(id);
  }
}
