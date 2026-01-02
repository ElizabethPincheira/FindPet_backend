import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  usuario_id: number;

  @Column({ length: 40 })
  nombre: string;

  @Column({ length: 40 })
  apellido: string;

  @Column({ length: 100, unique: true })
  correo_electronico: string;

  @Column({ length: 255 })
  contrasena: string;

  @Column({ length: 30 })
  tipo_usuario: string;
}
