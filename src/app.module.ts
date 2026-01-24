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
  url: process.env.DATABASE_URL,
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
