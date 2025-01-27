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
    description: 'Perguntas associadas à matéria (atualização opcional)',
    example: [
      {
        id: '603dcb7f3f015d3f8c4d8f1b',
        enunciado: 'Qual é a fórmula da área do círculo?',
      },
      {
        id: '603dcb7f3f015d3f8c4d8f2a',
        enunciado: 'Qual é a fórmula da área do quadrado?',
      },
    ],
    required: false,
  })
  perguntas?: IPergunta[];
}
