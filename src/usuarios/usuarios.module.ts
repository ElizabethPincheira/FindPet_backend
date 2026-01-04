import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuarios } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [
    TypeOrmModule.forFeature([Usuarios ]),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService]
})
export class UsuariosModule {}



