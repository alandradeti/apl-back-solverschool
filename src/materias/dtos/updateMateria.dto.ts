import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMateriaDto } from './createMateria.dto';
import { IPergunta } from 'src/perguntas/entities/pergunta.entity.interface';

export class UpdateMateriaDto extends PartialType(CreateMateriaDto) {
  @ApiProperty({
    description: 'Nome da matéria (atualização opcional)',
    example: 'Matemática',
    required: false,
  })
  nome?: string;

  @ApiProperty({
    description: 'Descrição da matéria (atualização opcional)',
    example: 'A matéria de matemática aborda álgebra e cálculo.',
    required: false, 
  })
  descricao?: string;

  @ApiProperty({
    description: 'IDs das perguntas associadas à matéria',
    example: ['603dcb7f3f015d3f8c4d8f1b', '603dcb7f3f015d3f8c4d8f2a'],
    required: false,
  })
  perguntas?: IPergunta[];
}
