import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',      // o el nombre del contenedor
      port: 5432,
      username: 'findpet_user',
      password: 'findpet_password',
      database: 'findpet_db',
      autoLoadEntities: true,
      synchronize: false,     // MUY importante en producción
    }),
    UsuariosModule,

  ],
})
export class AppModule {}
