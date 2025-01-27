import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IAlternativa } from 'src/alternativas/entities/alternativa.entity.interface';

export class CreatePerguntaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado: string;

  @IsOptional()
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: {
      id: '603dcb7f3f015d3f8c4d8f1b',
      nome: 'Matemática',
    },
    required: false,
  })
  materia?: IMateria;

  @IsOptional()
  @ApiProperty({
    description: 'IDs das alternativas relacionadas à pergunta',
    example: [
      {
        id: '603dcb7f3f015d3f8c4d8f1b',
        descricao: 'A fórmula da área do círculo é π * r²',
        correta: true,
      },
      {
        id: '603dcb7f3f015d3f8c4d8f1a',
        descricao: 'A fórmula da área do círculo é 2 * π * r',
        correta: false,
      },
    ],
    required: false,
  })
  alternativas?: IAlternativa[];
}