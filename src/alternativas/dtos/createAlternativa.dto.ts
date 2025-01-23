import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateAlternativaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Texto da alternativa',
    example: 'A fórmula da área do círculo é π * r²',
  })
  texto: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    description: 'Se a alternativa é a correta',
    example: true,
  })
  correta: boolean;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID da questão relacionada à alternativa',
    example: '603dcb7f3f015d3f8c4d8f1b',
    required: false,
  })
  questaoId?: string;
}