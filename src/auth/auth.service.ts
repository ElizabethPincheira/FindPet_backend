import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuarioRepo: Repository<Usuarios>,
    private readonly jwtService: JwtService,
  ) {}

  //REGISTRO DE USUARIO (CORREGIDO)
  async register(
    nombre: string,
    apellido: string,
    correo: string,
    contrasena: string,
  ) {
    //verificar si el correo ya existe
    const existe = await this.usuarioRepo.findOne({
      where: { correo_electronico: correo },
    });

    if (existe) {
      throw new BadRequestException('El correo ya está registrado');
    }

    //hashear contraseña
    const hash = await bcrypt.hash(contrasena, 10);

    //crear usuario
    const nuevoUsuario = this.usuarioRepo.create({
      nombre,
      apellido,
      correo_electronico: correo,
      contrasena: hash,
      rol: 'usuario', // usuario común por defecto
    });

    //guardar en BD
    await this.usuarioRepo.save(nuevoUsuario);

    return {
      mensaje: 'Usuario creado correctamente',
    };
  }

  //LOGIN USUARIO
  async login(dto: LoginDto) {
    const usuario = await this.usuarioRepo.findOne({
      where: { correo_electronico: dto.correo_electronico },
    });

    if (!usuario) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const passwordOk = await bcrypt.compare(
      dto.contrasena,
      usuario.contrasena,
    );

    if (!passwordOk) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const payload = {
      usuario_id: usuario.usuario_id,
    };

    return {
      access_token: this.jwtService.sign(payload),
      nombre: usuario.nombre,
    };
  }
}
