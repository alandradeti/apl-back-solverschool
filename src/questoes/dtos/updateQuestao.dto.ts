import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestaoDto } from './createQuestao.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuestaoDto extends PartialType(CreateQuestaoDto) {
  @ApiProperty({
    description: 'Enunciado da questão (opcional)',
    example: 'Qual é a fórmula da área do círculo?',
    required: false,
  })
  enunciado?: string;

  @ApiProperty({
    description: 'ID da matéria relacionada à questão (opcional)',
    example: '603dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  materiaId?: string;

  @ApiProperty({
    description: 'ID das alternativas relacionadas à questão',
    example: '876dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  alternativasIds?: string[];
}
