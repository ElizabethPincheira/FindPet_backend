import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt/jwt.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateMascotaDto, @CurrentUser() user: any) {

    console.log('Usuario actual en MascotasController:', user);
    return this.mascotasService.create(dto, user.usuario_id);
  }

  @Get()
  findAll() {
    return this.mascotasService.findAll();
  }
}
