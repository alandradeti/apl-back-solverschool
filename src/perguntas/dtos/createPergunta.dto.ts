import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePerguntaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: '603dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  materiaId?: string;
}
