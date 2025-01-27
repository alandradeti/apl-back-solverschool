import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsMongoId,
} from 'class-validator';

export class CreateAlternativaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Descrição da alternativa',
    example: 'A fórmula da área do círculo é π * r²',
  })
  descricao: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    description: 'Se a alternativa é a correta',
    example: true,
  })
  correta: boolean;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({
    description: 'ID da pergunta relacionada à alternativa',
    example: '603dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  PerguntaId?: string;
}
