import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Mascota } from 'src/mascotas/entities/mascota.entity';

@Entity('usuarios')
export class Usuarios {
  @PrimaryGeneratedColumn()
  usuario_id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  correo_electronico: string;

  @Column()
  contrasena: string;

  @Column()
  tipo_usuario: string;

  @OneToMany(() => Mascota, (mascota) => mascota.usuario)
  mascotas: Mascota[];
}
