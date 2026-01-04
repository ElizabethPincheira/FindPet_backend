import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMascotaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  tipo_mascota: string;

  @IsString()
  @IsOptional()
  raza?: string;

  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}
