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
import { CreateQuestaoDto } from '../dtos/createQuestao.dto';
import { IQuestaoDocument } from '../documents/interfaces/questao.document.interface';
import { QuestaoService } from '../services/questao.service';
import { UpdateQuestaoDto } from '../dtos/updateQuestao.dto';

@ApiTags('Questões')
@Controller('questoes')
export class QuestaoController {
  constructor(private readonly questaoService: QuestaoService) {}

  @ApiOperation({ summary: 'Cria uma nova questão' })
  @ApiResponse({
    status: 201,
    description: 'Questão criada com sucesso',
    type: CreateQuestaoDto,
  })
  @Post()
  async create(
    @Body() createQuestaoDto: CreateQuestaoDto,
  ): Promise<IQuestaoDocument> {
    return this.questaoService.create(createQuestaoDto);
  }

  @ApiOperation({ summary: 'Lista todas as questões' })
  @ApiResponse({
    status: 200,
    description: 'Lista de questões retornada com sucesso',
    type: [CreateQuestaoDto],
  })
  @Get()
  async findAll(): Promise<IQuestaoDocument[]> {
    return this.questaoService.findAll();
  }

  @ApiOperation({ summary: 'Busca uma questão pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da questão', required: true })
  @ApiResponse({
    status: 200,
    description: 'Questão encontrada com sucesso',
    type: CreateQuestaoDto,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IQuestaoDocument | null> {
    return this.questaoService.findById(id);
  }

  @ApiOperation({ summary: 'Busca questões pela matéria' })
  @ApiParam({ name: 'materiaId', description: 'ID da matéria', required: true })
  @ApiResponse({
    status: 200,
    description: 'Questões encontradas com sucesso',
    type: [CreateQuestaoDto],
  })
  @Get('materia/:materiaId')
  async findByMateria(
    @Param('materiaId') materiaId: string,
  ): Promise<IQuestaoDocument[]> {
    return this.questaoService.findByMateriaId(materiaId);
  }

  @ApiOperation({ summary: 'Atualiza uma questão pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da questão', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateQuestaoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Questão atualizada com sucesso',
    type: UpdateQuestaoDto,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMateriaDto: UpdateQuestaoDto,
  ): Promise<IQuestaoDocument | null> {
    return this.questaoService.update(id, updateMateriaDto);
  }

  @ApiOperation({ summary: 'Remove uma questão pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da questão', required: true })
  @ApiResponse({ status: 200, description: 'Questão removida com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.questaoService.delete(id);
    return { message: 'Questão removida com sucesso' };
  }
}
