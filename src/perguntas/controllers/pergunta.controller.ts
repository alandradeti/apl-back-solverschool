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
import { CreatePerguntaDto } from '../dtos/createPergunta.dto';
import { PerguntaService } from '../services/pergunta.service';
import { UpdatePerguntaDto } from '../dtos/updatePergunta.dto';
import { Pergunta } from '../entities/pergunta.entity';
import { IPergunta } from '../entities/interfaces/pergunta.entity.interface';

@ApiTags('Perguntas')
@Controller('perguntas')
export class PerguntaController {
  constructor(private readonly perguntaService: PerguntaService) {}

  @ApiOperation({ summary: 'Cria uma nova pergunta' })
  @ApiBody({
    description: 'Dados para criação da pergunta',
    type: CreatePerguntaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Pergunta criada com sucesso',
    type: Pergunta,
  })
  @Post()
  async create(
    @Body() createPerguntaDto: CreatePerguntaDto,
  ): Promise<IPergunta> {
    return this.perguntaService.create(createPerguntaDto);
  }

  @ApiOperation({ summary: 'Lista todas as perguntas' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de perguntas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de perguntas retornada com sucesso',
    type: [Pergunta],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IPergunta[]> {
    return this.perguntaService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Lista todas as perguntas com as alternativas' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de perguntas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de perguntas com as alternativas retornada com sucesso',
    type: [Pergunta],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IPergunta[]> {
    return this.perguntaService.findAllWithEntities(limite, pagina);
  }

  @ApiOperation({ summary: 'Busca uma pergunta com as alternativas pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da pergunta', required: true })
  @ApiResponse({
    status: 200,
    description: 'Pergunta encontrada com sucesso',
    type: Pergunta,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(
    @Param('id') id: string,
  ): Promise<IPergunta | null> {
    return this.perguntaService.findByIdWithEntities(id);
  }

  @ApiOperation({ summary: 'Busca uma pergunta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da pergunta', required: true })
  @ApiResponse({
    status: 200,
    description: 'Pergunta encontrada com sucesso',
    type: Pergunta,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IPergunta | null> {
    return this.perguntaService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza uma pergunta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da pergunta', required: true })
  @ApiBody({
    description: 'Dados para atualização da pergunta',
    type: UpdatePerguntaDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Pergunta atualizada com sucesso',
    type: Pergunta,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePerguntaDto: UpdatePerguntaDto,
  ): Promise<{ message: string }> {
    await this.perguntaService.update(id, updatePerguntaDto);
    return { message: 'Pergunta atualizada com sucesso' };
  }

  @ApiOperation({ summary: 'Remove uma pergunta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da pergunta', required: true })
  @ApiResponse({ status: 200, description: 'Pergunta removida com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.perguntaService.delete(id);
    return { message: 'Pergunta removida com sucesso' };
  }
}
