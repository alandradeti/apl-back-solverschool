import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { MateriaService } from 'src/materias/services/materia.service';
import { CreateMateriaDto } from '../dtos/createMateria.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateMateriaDto } from '../dtos/updateMateria.dto';
import { IMateria } from '../entities/interfaces/materia.entity.interface';
import { Materia } from '../entities/materia.entity';
import { PAGINATION } from 'src/database/contants/database.constants';

@ApiTags('Materia')
@Controller('materia')
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
    type: Materia,
  })
  @Post()
  async create(@Body() createMateriaDto: CreateMateriaDto): Promise<IMateria> {
    return this.materiaService.create(createMateriaDto);
  }

  @ApiOperation({ summary: 'Lista todas as matérias' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de itens por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de matérias retornada com sucesso',
    type: [Materia],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number = PAGINATION.DEFAULT_LIMIT,
    @Query('pagina') pagina: number = PAGINATION.DEFAULT_PAGE,
  ): Promise<IMateria[]> {
    return this.materiaService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Lista todas as matérias com as perguntas' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de matérias por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de matérias com perguntas retornada com sucesso',
    type: [Materia],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IMateria[]> {
    return this.materiaService.findAllWithEntities(limite, pagina);
  }

  @ApiOperation({ summary: 'Busca uma matéria com as perguntas pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da matéria', required: true })
  @ApiResponse({
    status: 200,
    description: 'Matéria encontrada com sucesso',
    type: Materia,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(
    @Param('id') id: string,
  ): Promise<IMateria | null> {
    return this.materiaService.findByIdWithEntities(id);
  }

  @ApiOperation({ summary: 'Busca uma matéria pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da matéria', required: true })
  @ApiResponse({
    status: 200,
    description: 'Matéria encontrada com sucesso',
    type: Materia,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IMateria | null> {
    return this.materiaService.findById(id);
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
    type: Materia,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMateriaDto: UpdateMateriaDto,
  ): Promise<{ message: string }> {
    await this.materiaService.update(id, updateMateriaDto);
    return { message: 'Matéria atualizada com sucesso' };
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
