import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuarios } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosRepository } from './usuarios.repository';



@Module({
  imports: [
    TypeOrmModule.forFeature([Usuarios ]),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosRepository],
  exports: [UsuariosRepository]
})
export class UsuariosModule {}



