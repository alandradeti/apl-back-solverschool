import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMateriaDto } from './createMateria.dto';

export class UpdateMateriaDto extends PartialType(CreateMateriaDto) {
  @ApiProperty({
    description: 'Nome da matéria',
    example: 'Matemática',
    required: false, 
  })
  nome?: string;

  @ApiProperty({
    description: 'Descrição da matéria',
    example: 'A matéria de matemática aborda álgebra e cálculo.',
    required: false,
  })
  descricao?: string;
}
