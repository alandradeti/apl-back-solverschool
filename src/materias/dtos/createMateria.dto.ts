import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IPergunta } from 'src/perguntas/entities/pergunta.entity.interface';

export class CreateMateriaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome da matéria',
    example: 'Matemática',
    required: true,
  })
  nome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição da matéria',
    example: 'A matéria de matemática aborda álgebra e cálculo.',
    required: true,
  })
  descricao: string;

  @IsOptional()
  @ApiProperty({
    description: 'Perguntas associadas à matéria',
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
