import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaDto } from './createMateria.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMateriaDto extends PartialType(CreateMateriaDto) {
    @ApiProperty({
        description: 'Nome da matéria (opcional)',
        example: 'Matemática',
        required: false,
    })
    nome?: string;
    
    @ApiProperty({
        description: 'Descrição da matéria (opcional)',
        example: 'A matéria de matemática aborda álgebra e cálculo.',
        required: false, 
    })
    descricao?: string;
}
