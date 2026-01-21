import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

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
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsOptional()
  numero_chip?: string;
}
