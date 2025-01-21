import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMateriaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome da matéria',
    example: 'Matemática',
  })
  nome: string;

  @ApiProperty({
    description: 'Descrição da matéria',
    example: 'A matéria de matemática aborda álgebra e cálculo.',
  })
  descricao: string;
}