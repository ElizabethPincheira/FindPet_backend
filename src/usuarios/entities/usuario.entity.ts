import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Mascota } from '../../mascotas/entities/mascota.entity';

@Entity('usuarios')
export class Usuarios {
  @PrimaryGeneratedColumn()
  usuario_id!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column({ unique: true })
  correo_electronico!: string;

  @Column()
  contrasena!: string;

  @Column()
  tipo_usuario!: string;

   @Column({ default: true })
  activo!: boolean;

  @OneToMany(() => Mascota, mascota => mascota.usuario)
  mascotas!: Mascota[];

  @Column({ default: 'usuario' })
  rol!: string;
}
