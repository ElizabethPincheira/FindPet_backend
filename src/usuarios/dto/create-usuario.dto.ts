import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';


export class CreateUsuarioDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  apellido!: string;

  @IsEmail()
  correo_electronico!: string;

  @IsString()
  @MinLength(6)
  contrasena!: string;

  @IsOptional()
  @IsString()
  tipo_usuario?: string;

}






