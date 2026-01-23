import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Publicacion } from './entities/publicacion.entity';
import { Mascota } from 'src/mascotas/entities/mascota.entity';

@Injectable()
export class PublicacionesRepository extends Repository<Publicacion> {

  constructor(dataSource: DataSource) {
    super(Publicacion, dataSource.createEntityManager());
  }

  async crear(dto, mascota: Mascota) {
    const pub = this.create({
      ...dto,
      mascota
    });
    return this.save(pub);
  }
}
