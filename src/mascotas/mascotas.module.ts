import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { Mascota } from './entities/mascota.entity';
import { MascotaRepository } from './mascotas.repository';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Mascota]),
    UsuariosModule,
    AuthModule,
  ],
  controllers: [MascotasController],
  providers: [
    MascotasService,
    MascotaRepository, 
  ],
})
export class MascotasModule {}
