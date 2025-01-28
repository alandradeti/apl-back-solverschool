import { PartialType } from '@nestjs/mapped-types';
import { CreatePerguntaDto } from './createPergunta.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePerguntaDto extends PartialType(CreatePerguntaDto) {
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado?: string;

  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: '603dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  materiaId?: string;
}
