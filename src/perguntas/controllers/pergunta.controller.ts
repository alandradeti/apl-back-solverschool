import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CreatePerguntaDto } from '../dtos/createPergunta.dto';
import { IPerguntaDocument } from '../documents/interfaces/pergunta.document.interface';
import { UpdatePerguntaDto } from '../dtos/updatePergunta.dto';
import { PerguntaResponseDto } from '../dtos/perguntaResponse.dto';
import { PerguntaService } from '../services/pergunta.service';

@ApiTags('Perguntas')
@Controller('perguntas')
export class PerguntaController {
  constructor(private readonly PerguntaService: PerguntaService) {}

  @ApiOperation({ summary: 'Cria uma nova pergunta' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreatePerguntaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Pergunta criada com sucesso',
    type: PerguntaResponseDto,
  })
  @Post()
  async create(
    @Body() createPerguntaDto: CreatePerguntaDto,
  ): Promise<IPerguntaDocument> {
    return this.PerguntaService.create(createPerguntaDto);
  }

  @ApiOperation({ summary: 'Lista todas as perguntas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de perguntas retornada com sucesso',
    type: [PerguntaResponseDto],
  })
  @Get()
  async findAll(): Promise<IPerguntaDocument[]> {
    return this.PerguntaService.findAll();
  }

  @ApiOperation({ summary: 'Busca uma pergunta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da pergunta', required: true })
  @ApiResponse({
    status: 200,
    description: 'Pergunta encontrada com sucesso',
    type: PerguntaResponseDto,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IPerguntaDocument | null> {
    return this.PerguntaService.findById(id);
  }

  @ApiOperation({ summary: 'Busca perguntas pela matéria' })
  @ApiParam({ name: 'materiaId', description: 'ID da matéria', required: true })
  @ApiResponse({
    status: 200,
    description: 'Perguntas encontradas com sucesso',
    type: [PerguntaResponseDto],
  })
  @Get('materia/:materiaId')
  async findByMateria(
    @Param('materiaId') materiaId: string,
  ): Promise<IPerguntaDocument[]> {
    return this.PerguntaService.findByMateriaId(materiaId);
  }

  @ApiOperation({ summary: 'Atualiza uma pergunta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da pergunta', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdatePerguntaDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Pergunta atualizada com sucesso',
    type: PerguntaResponseDto,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMateriaDto: UpdatePerguntaDto,
  ): Promise<IPerguntaDocument | null> {
    return this.PerguntaService.update(id, updateMateriaDto);
  }

  @ApiOperation({ summary: 'Remove uma pergunta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da pergunta', required: true })
  @ApiResponse({ status: 200, description: 'Pergunta removida com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.PerguntaService.delete(id);
    return { message: 'Pergunta removida com sucesso' };
  }
}
