import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { MateriaService } from 'src/materias/services/materia.service';
import { CreateMateriaDto } from '../dtos/createMateria.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateMateriaDto } from '../dtos/updateMateria.dto';
import { IMateriaDocument } from '../documents/interfaces/materia.document.interface';
import { MateriaResponseDto } from '../dtos/materiaResponse.dto';

@ApiTags('Materias')
@Controller('materias')
export class MateriaController {
  constructor(private readonly materiaService: MateriaService) {}

  @ApiOperation({ summary: 'Cria uma nova matéria' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateMateriaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Matéria criada com sucesso',
    type: MateriaResponseDto,
  })
  @Post()
  async create(
    @Body() createMateriaDto: CreateMateriaDto,
  ): Promise<IMateriaDocument> {
    console.log(createMateriaDto);
    return this.materiaService.create(createMateriaDto);
  }

  @ApiOperation({ summary: 'Lista todas as matérias' })
  @ApiResponse({
    status: 200,
    description: 'Lista de matérias retornada com sucesso',
    type: [MateriaResponseDto],
  })
  @Get()
  async findAll(): Promise<IMateriaDocument[]> {
    return this.materiaService.findAll();
  }

  @ApiOperation({ summary: 'Busca uma matéria pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da matéria', required: true })
  @ApiResponse({
    status: 200,
    description: 'Matéria encontrada com sucesso',
    type: MateriaResponseDto,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IMateriaDocument | null> {
    return this.materiaService.findById(id);
  }

  @ApiOperation({ summary: 'Busca as matérias pelo nome' })
  @ApiParam({ name: 'nome', description: 'Nome da matéria', required: true })
  @ApiResponse({
    status: 200,
    description: 'Matérias encontradas com sucesso',
    type: [MateriaResponseDto],
  })
  @Get('nome/:nome')
  async findByName(@Param('nome') nome: string): Promise<IMateriaDocument[]> {
    return this.materiaService.findByName(nome);
  }

  @ApiOperation({ summary: 'Atualiza uma matéria pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da matéria', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateMateriaDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Matéria atualizada com sucesso',
    type: MateriaResponseDto,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMateriaDto: UpdateMateriaDto,
  ): Promise<IMateriaDocument | null> {
    return this.materiaService.update(id, updateMateriaDto);
  }

  @ApiOperation({ summary: 'Remove uma matéria pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da matéria', required: true })
  @ApiResponse({ status: 200, description: 'Matéria removida com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.materiaService.delete(id);
    return { message: 'Matéria removida com sucesso' };
  }
}
