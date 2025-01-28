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
        id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc8',
        enunciado: 'Qual é a fórmula da área do círculo?',
      },
      {
        id: '3792fee5-70d6-431f-8195-2b905e69f9b3',
        enunciado: 'Qual é a fórmula da área do quadrado?',
      },
    ],
    required: false,
  })
  perguntas?: IPergunta[];
}
