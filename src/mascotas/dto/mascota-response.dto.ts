export class MascotaResponseDto {
  mascota_id: number;
  nombre: string;
  tipo_mascota: string;
  raza?: string;
  color?: string;
  descripcion?: string;
  numero_chip?: string;
  activo: boolean;
}
