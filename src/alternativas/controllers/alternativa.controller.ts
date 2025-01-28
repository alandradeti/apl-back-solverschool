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
import { CreateAlternativaDto } from '../dtos/createAlternativa.dto';
import { AlternativaService } from '../services/alternativa.service';
import { IAlternativaDocument } from '../documents/interfaces/alternativa.document.interface';
import { UpdateAlternativaDto } from '../dtos/updateAlternativa.dto';
import { AlternativaResponseDto } from '../dtos/alternativaResponse.dto';

@ApiTags('Alternativas')
@Controller('alternativas')
export class AlternativaController {
  constructor(private readonly alternativaService: AlternativaService) {}

  @ApiOperation({ summary: 'Cria uma nova alternativa' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateAlternativaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Alternativa criada com sucesso',
    type: AlternativaResponseDto,
  })
  @Post()
  async create(
    @Body() createAlternativaDto: CreateAlternativaDto,
  ): Promise<IAlternativaDocument> {
    return this.alternativaService.create(createAlternativaDto);
  }

  @ApiOperation({ summary: 'Lista todas as alternativas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de alternativas retornada com sucesso',
    type: [AlternativaResponseDto],
  })
  @Get()
  async findAll(): Promise<IAlternativaDocument[]> {
    return this.alternativaService.findAll();
  }

  @ApiOperation({ summary: 'Busca uma alternativa pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da alternativa', required: true })
  @ApiResponse({
    status: 200,
    description: 'Alternativa encontrada com sucesso',
    type: AlternativaResponseDto,
  })
  @Get(':id')
  async findById(
    @Param('id') id: string,
  ): Promise<IAlternativaDocument | null> {
    return this.alternativaService.findById(id);
  }

  @ApiOperation({ summary: 'Busca alternativas pelo ID da pergunta' })
  @ApiParam({
    name: 'PerguntaId',
    description: 'ID da pergunta',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Alternativas encontradas com sucesso',
    type: [AlternativaResponseDto],
  })
  @Get('Pergunta/:PerguntaId')
  async findByPerguntaId(
    @Param('PerguntaId') PerguntaId: string,
  ): Promise<IAlternativaDocument[]> {
    return this.alternativaService.findByPerguntaId(PerguntaId);
  }

  @ApiOperation({ summary: 'Atualiza uma alternativa pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da alternativa', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateAlternativaDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Alternativa atualizada com sucesso',
    type: AlternativaResponseDto,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAlternativaDto: UpdateAlternativaDto,
  ): Promise<IAlternativaDocument | null> {
    return this.alternativaService.update(id, updateAlternativaDto);
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
