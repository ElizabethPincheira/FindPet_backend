import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePublicacionDto {

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  region: string;

  @IsString()
  @IsNotEmpty()
  comuna: string;

  @IsNumber()
  mascota_id: number;
}
