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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { CreateAlternativaDto } from '../dtos/createAlternativa.dto';
import { AlternativaService } from '../services/alternativa.service';
import { UpdateAlternativaDto } from '../dtos/updateAlternativa.dto';
import { Alternativa } from '../entities/alternativa.entity';
import { IAlternativa } from '../entities/interfaces/alternativa.entity.interface';
@ApiTags('Alternativas')
@Controller('alternativas')
export class AlternativaController {
  constructor(private readonly alternativaService: AlternativaService) {}

  @ApiOperation({ summary: 'Cria uma nova alternativa' })
  @ApiBody({
    description: 'Dados para criação da alternativa',
    type: CreateAlternativaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Alternativa criada com sucesso',
    type: Alternativa,
  })
  @Post()
  async create(@Body() createAlternativaDto: CreateAlternativaDto): Promise<IAlternativa> {
    return this.alternativaService.create(createAlternativaDto);
  }

  @ApiOperation({ summary: 'Lista todas as alternativas com as perguntas' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de alternativas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de alternativas com perguntas retornada com sucesso',
    type: [Alternativa],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IAlternativa[]> {
    return this.alternativaService.findAllWithEntities(limite, pagina);
  }

  @ApiOperation({ summary: 'Busca uma alternativa com a pergunta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da alternativa', required: true })
  @ApiResponse({
    status: 200,
    description: 'Alternativa encontrada com sucesso',
    type: Alternativa,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(@Param('id') id: string): Promise<IAlternativa | null> { 
    return this.alternativaService.findByIdWithEntities(id);
  }

  @ApiOperation({ summary: 'Lista todas as alternativas' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de alternativas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de alternativas retornada com sucesso',
    type: [Alternativa],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IAlternativa[]> {
    return this.alternativaService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Busca uma alternativa pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da alternativa', required: true })
  @ApiResponse({
    status: 200,
    description: 'Alternativa encontrada com sucesso',
    type: Alternativa,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IAlternativa | null> {
    return this.alternativaService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza uma alternativa pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da alternativa', required: true })
  @ApiBody({
    description: 'Dados para atualização da alternativa',
    type: UpdateAlternativaDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Alternativa atualizada com sucesso',
    type: Alternativa,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAlternativaDto: UpdateAlternativaDto,
  ): Promise<{ message: string }> {
    this.alternativaService.update(id, updateAlternativaDto);
    return { message: 'Alternativa atualizada com sucesso' };
  }

  @ApiOperation({ summary: 'Remove uma alternativa pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da alternativa', required: true })
  @ApiResponse({ status: 200, description: 'Alternativa removida com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.alternativaService.delete(id);
    return { message: 'Alternativa removida com sucesso' };
  }
}
