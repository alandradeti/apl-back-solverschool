import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestaoDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Enunciado da questão',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado: string;

  @ApiProperty({
    description: 'ID da matéria relacionada à questão',
    example: '603dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  materiaId?: string;

  @ApiProperty({
    description: 'ID das alternativas relacionadas à questão',
    example: ['603dcb7f3f015d3f8c4d8f1b', '603dcb7f3f015d3f8c4d8f1c'],
    required: false,
  })
  alternativasIds?: string[];
}
