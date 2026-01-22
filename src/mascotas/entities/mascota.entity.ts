import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuarios } from '../../usuarios/entities/usuario.entity';

@Entity('mascota')
export class Mascota {
  @PrimaryGeneratedColumn()
  mascota_id!: number;

  @Column()
  nombre!: string;

  @Column()
  tipo_mascota!: string;

  @Column({ nullable: true })
  raza!: string;

  @Column({ nullable: true })
  color!: string;

  @Column({ nullable: true })
  descripcion!: string;

  @Column({ nullable: true })
  numero_chip!: string;

  @Column({ default: true })
  activo!: boolean;

  @ManyToOne(() => Usuarios, usuario => usuario.mascotas)
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuarios;
}

