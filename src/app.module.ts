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
  url:
    process.env.NODE_ENV === 'production'
      ? process.env.DATABASE_URL
      : undefined,

  host:
    process.env.NODE_ENV !== 'production'
      ? process.env.DB_HOST
      : undefined,

  port:
    process.env.NODE_ENV !== 'production'
      ? Number(process.env.DB_PORT)
      : undefined,

  username:
    process.env.NODE_ENV !== 'production'
      ? process.env.DB_USER
      : undefined,

  password:
    process.env.NODE_ENV !== 'production'
      ? process.env.DB_PASSWORD
      : undefined,

  database:
    process.env.NODE_ENV !== 'production'
      ? process.env.DB_NAME
      : undefined,

  autoLoadEntities: true,
  synchronize: true,

  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
}),



    UsuariosModule,

    SeedModule, AuthModule, MascotasModule, PublicacionesModule
  ],
})
export class AppModule { }
