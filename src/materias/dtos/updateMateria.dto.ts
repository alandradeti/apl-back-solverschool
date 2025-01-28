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
        id: '0444d7f2-e5fa-4817-b7a2-8be7813a3cb9',
        enunciado: 'Qual é a fórmula da área do círculo?',
      },
      {
        id: 'b8613686-9cad-4b67-9d31-c32de262a6f9',
        enunciado: 'Qual é a fórmula da área do quadrado?',
      },
    ],
    required: false,
  })
  perguntas?: IPergunta[];
}
