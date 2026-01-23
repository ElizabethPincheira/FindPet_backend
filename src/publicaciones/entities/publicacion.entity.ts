import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Mascota } from 'src/mascotas/entities/mascota.entity';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';

@Entity('publicaciones')
export class Publicacion {
  @PrimaryGeneratedColumn()
  publicacion_id: number;

  @Column()
  titulo: string;

  @Column('text')
  descripcion: string;

  @Column()
  estado: string; // Perdida, Robada, Adopcion

  @Column()
  region: string;

  @Column()
  comuna: string;

  @Column()
  mascota_id: number;

  @Column()
  usuario_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @ManyToOne(() => Mascota)
  @JoinColumn({ name: 'mascota_id' })
  mascota: Mascota;

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuarios;
}
