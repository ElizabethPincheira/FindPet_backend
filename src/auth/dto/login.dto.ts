import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  correo_electronico!: string;

  @IsString()
  @MinLength(6)
  contrasena!: string;
}
