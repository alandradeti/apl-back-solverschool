import { ApiProperty } from '@nestjs/swagger';
import { DatabaseResponseDto } from 'src/database/dtos/databaseResponse.dto';

export class PerguntaResponseDto extends DatabaseResponseDto {
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado: string;

  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: '603dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  materiaId?: string;
}
