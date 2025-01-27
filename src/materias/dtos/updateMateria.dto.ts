import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMateriaDto } from './createMateria.dto';
import { IsEmpty, IsString } from 'class-validator';

export class UpdateMateriaDto {
  @IsString()
  @IsEmpty()
  @ApiProperty({
    description: 'Nome da matéria',
    example: 'Matemática',
    required: true,
  })
  @ApiProperty({
    description: 'Nome da matéria',
    example: 'Matemática',
    required: false,
  })
  nome?: string;

  @IsString()
  @IsEmpty()
  @ApiProperty({
    description: 'Descrição da matéria',
    example: 'A matéria de matemática aborda álgebra e cálculo.',
    required: true,
  })
  @ApiProperty({
    description: 'Descrição da matéria',
    example: 'A matéria de matemática aborda álgebra e cálculo.',
    required: false,
  })
  descricao?: string;
}
