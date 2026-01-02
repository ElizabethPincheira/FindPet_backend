import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { UsuariosRepository } from './usuarios.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosRepository]
})
export class UsuariosModule {}
