import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { IAlternativa } from 'src/alternativas/entities/alternativa.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';

export class CreatePerguntaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado: string;

  @IsOptional()
  @IsUUID()
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  materia?: IMateria;

  @IsOptional()
  @IsUUID('4', { each: true })
  @ApiProperty({
    description: 'IDs das alternativas relacionadas à pergunta',
    example: ['550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001'],
    required: false,
  })
  alternativa?: IAlternativa[]; 
}
