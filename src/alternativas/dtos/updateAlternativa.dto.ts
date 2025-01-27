import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAlternativaDto } from './createAlternativa.dto';
import { IPergunta } from 'src/perguntas/entities/pergunta.entity.interface';

export class UpdateAlternativaDto extends PartialType(CreateAlternativaDto) {
  @ApiProperty({
    description: 'Descrição da alternativa (atualização opcional)',
    example: 'A fórmula da área do círculo é π * r²',
    required: false,
  })
  descricao?: string;

  @ApiProperty({
    description: 'Indica se a alternativa é correta (atualização opcional)',
    example: true,
    required: false,
  })
  correta?: boolean;

  @ApiProperty({
    description: 'ID da pergunta relacionada à alternativa (atualização opcional)',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  pergunta?: IPergunta;
}
