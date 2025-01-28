import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAlternativaDto } from './createAlternativa.dto';

export class UpdateAlternativaDto extends PartialType(CreateAlternativaDto) {
  @ApiProperty({
    description: 'Descrição da alternativa',
    example: 'A fórmula da área do círculo é π * r²',
    required: false,
  })
  descricao?: string;

  @ApiProperty({
    description: 'Se a alternativa é a correta',
    example: true,
    required: false,
  })
  correta?: boolean;

  @ApiProperty({
    description: 'ID da pergunta relacionada à alternativa',
    example: '603dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  PerguntaId?: string;
}
