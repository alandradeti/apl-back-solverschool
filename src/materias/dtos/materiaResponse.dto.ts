import { ApiProperty } from '@nestjs/swagger';
import { DatabaseResponseDto } from 'src/database/dtos/databaseResponse.dto';

export class MateriaResponseDto extends DatabaseResponseDto {
  @ApiProperty({
    description: 'Nome da matéria.',
    example: 'Matemática',
  })
  nome: string;

  @ApiProperty({
    description: 'Descrição da matéria.',
    example: 'Disciplina de cálculo e álgebra',
  })
  descricao: string;
}
