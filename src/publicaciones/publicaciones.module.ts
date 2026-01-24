import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicacionesService } from './publicaciones.service';
import { PublicacionesController } from './publicaciones.controller';
import { Publicacion } from './entities/publicacion.entity';
import { Mascota } from '../mascotas/entities/mascota.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Publicacion, Mascota])],
  controllers: [PublicacionesController],
  providers: [PublicacionesService],
  exports: [PublicacionesService],
})
export class PublicacionesModule {}
