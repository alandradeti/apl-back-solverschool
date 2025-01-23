import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestaoDto } from '../dtos/createQuestao.dto';
import { UpdateQuestaoDto } from '../dtos/updateQuestao.dto';
import { IQuestaoDocument } from '../documents/interfaces/questao.document.interface';
import { IQuestaoRepository } from '../repositories/interfaces/questao.repository.interface';

@Injectable()
export class QuestaoService {
  constructor(
    @Inject('IQuestaoRepository')
    private readonly questaoRepository: IQuestaoRepository,
  ) {}

  async create(createQuestaoDto: CreateQuestaoDto): Promise<IQuestaoDocument> {
    return this.questaoRepository.create(createQuestaoDto);
  }

  async findAll(): Promise<IQuestaoDocument[]> {
    return this.questaoRepository.findAllWithPopulate([
      { path: 'materiaId', select: 'nome descricao' },
      { path: 'alternativasIds', select: 'texto' },
    ]);
  }

  async findById(id: string): Promise<IQuestaoDocument | null> {
    return this.questaoRepository.findByIdWithPopulate(id, [
      { path: 'materiaId', select: 'nome descricao' },
      { path: 'alternativasIds', select: 'texto' },
    ]);
  }

  async findByMateriaId(materiaId: string): Promise<IQuestaoDocument[]> {
    return this.questaoRepository.findByMateriaIdWithPopulate(materiaId);
  }

  async update(
    id: string,
    updateQuestaoDto: UpdateQuestaoDto,
  ): Promise<IQuestaoDocument | null> {
    const questaoAtualizada = await this.questaoRepository.update(
      id,
      updateQuestaoDto,
    );
    if (!questaoAtualizada) {
      throw new NotFoundException(`Questão com ID ${id} não encontrada.`);
    }
    return questaoAtualizada;
  }

  async delete(id: string): Promise<IQuestaoDocument | null> {
    const questaoDeletada = await this.questaoRepository.delete(id);
    if (!questaoDeletada) {
      throw new NotFoundException(`Questão com ID ${id} não encontrada.`);
    }
    return questaoDeletada;
  }
}
