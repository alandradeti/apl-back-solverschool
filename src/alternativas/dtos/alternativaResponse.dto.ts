import { ApiProperty } from '@nestjs/swagger';
import { DatabaseResponseDto } from 'src/database/dtos/databaseResponse.dto';

export class AlternativaResponseDto extends DatabaseResponseDto {
  @ApiProperty({
    description: 'Descrição da alternativa',
    example: 'A fórmula da área do círculo é π * r²',
  })
  descricao: string;

  @ApiProperty({
    description: 'Se a alternativa é a correta',
    example: true,
  })
  correta: boolean;

  @ApiProperty({
    description: 'ID da pergunta relacionada à alternativa',
    example: '603dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  PerguntaId?: string;
}
