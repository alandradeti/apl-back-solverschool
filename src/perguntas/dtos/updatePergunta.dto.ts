import { PartialType } from '@nestjs/mapped-types';
import { CreatePerguntaDto } from './createPergunta.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IAlternativa } from 'src/alternativas/entities/alternativa.entity.interface';

export class UpdatePerguntaDto extends PartialType(CreatePerguntaDto) {
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado?: string;

  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  materia?: IMateria;

  @ApiProperty({
    description: 'IDs das alternativas relacionadas à pergunta',
    example: ['550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001'],
    required: false,
  })
  alternativas?: IAlternativa[];
}
