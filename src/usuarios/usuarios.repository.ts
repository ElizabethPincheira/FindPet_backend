import { Injectable } from '@nestjs/common';
import { Usuario } from './usuarios.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuariosRepository {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepo: Repository<Usuario>,
    ) { }
    async obtenerTodos() {
        return this.usuarioRepo.find();
    }
}

