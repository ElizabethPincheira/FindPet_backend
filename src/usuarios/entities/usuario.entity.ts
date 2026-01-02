import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuarios')
export class Usuario {

  @PrimaryGeneratedColumn()
  usuario_id: number;

  @Column({ type: 'varchar', length: 40, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 40, nullable: false })
  apellido: string;

  @Column({ 
    type: 'varchar', 
    length: 100, 
    nullable: false, 
    unique: true 
  })
  correo_electronico: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  contrasena: string;

  @Column({ 
    type: 'varchar', 
    length: 30, 
    nullable: false, 
    default: 'comun' 
  })
  tipo_usuario: string;
}
