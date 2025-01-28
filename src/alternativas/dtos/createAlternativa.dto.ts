import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { CreatePerguntaDto } from 'src/perguntas/dtos/createPergunta.dto';
import { IPergunta } from 'src/perguntas/entities/pergunta.entity.interface';

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
    description: 'Indica se a alternativa é a correta',
    example: true,
  })
  correta: boolean;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreatePerguntaDto)
  @ApiProperty({
    description: 'Pergunta relacionada à alternativa (ID da pergunta)',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440000',
      enunciado: 'Qual é a fórmula da área do círculo?',
    },
    required: true,
  })
  pergunta: IPergunta;
}
