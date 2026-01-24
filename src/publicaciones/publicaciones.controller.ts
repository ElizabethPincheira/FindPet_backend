import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { PublicacionesService } from './publicaciones.service';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { JwtAuthGuard } from '../auth/guards/jwt/jwt.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('publicaciones')
export class PublicacionesController {
  constructor(private readonly publicacionesService: PublicacionesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() dto: CreatePublicacionDto,
    @CurrentUser() user: any,
  ) {
    return this.publicacionesService.create(dto, user.usuario_id);
  }

  @Get()
  findAll() {
    return this.publicacionesService.findAll();
  }

  @Get('mascota/:mascota_id')
  findByMascota(@Param('mascota_id') mascota_id: string) {
    return this.publicacionesService.findByMascota(Number(mascota_id));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicacionesService.findOne(Number(id));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.publicacionesService.remove(Number(id));
  }
}
