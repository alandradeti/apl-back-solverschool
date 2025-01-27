import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';
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
    description: 'IDs das perguntas associadas à matéria',
    example: ['603dcb7f3f015d3f8c4d8f1b', '603dcb7f3f015d3f8c4d8f2a'],
    required: false,
  })
  perguntas?: IPergunta[];
}
