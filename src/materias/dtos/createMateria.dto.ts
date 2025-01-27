import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateMateriaDto {
  @IsEmpty()
  @ApiProperty({
    description: 'ID da matéria',
    example: '72ee8e45-340b-46b3-b108-ef4ba1a0a862',
    required: false,
  })
  id?: string;

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
}
