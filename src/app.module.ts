import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { PublicacionesModule } from './publicaciones/publicaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.NODE_ENV === 'production',
      extra: {
        ssl:
          process.env.NODE_ENV === 'production'
            ? { rejectUnauthorized: false }
            : false,
      },
    }),


    UsuariosModule,

    SeedModule, AuthModule, MascotasModule, PublicacionesModule
  ],
})
export class AppModule { }
