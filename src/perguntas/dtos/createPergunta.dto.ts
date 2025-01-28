import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { IAlternativa } from 'src/alternativas/entities/alternativa.entity.interface';
import { CreateMateriaDto } from 'src/materias/dtos/createMateria.dto';
import { Type } from 'class-transformer';

export class CreatePerguntaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateMateriaDto)
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: {
      id: '6f079307-3886-4367-b128-fc45fc5a203e',
      nome: 'Matemática',
      descricao: 'A matéria de matemática aborda álgebra e cálculo.',
    },
    required: true,
  })
  materia: CreateMateriaDto;

  @IsOptional()
  @ApiProperty({
    description: 'IDs das alternativas relacionadas à pergunta',
    example: [
      {
        id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
        descricao: 'A fórmula da área do círculo é π * r²',
        correta: true,
      },
      {
        id: 'a10e2a53-5a02-406b-aa80-961ba271aeb3',
        descricao: 'A fórmula da área do círculo é 2 * π * r',
        correta: false,
      },
    ],
    required: false,
  })
  alternativas?: IAlternativa[];
}
