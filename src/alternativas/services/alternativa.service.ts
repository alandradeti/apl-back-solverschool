import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IAlternativaDocument } from '../documents/interfaces/alternativa.document.interface';
import { UpdateAlternativaDto } from '../dtos/updateAlternativa.dto';
import { CreateAlternativaDto } from '../dtos/createAlternativa.dto';
import { IAlternativaRepository } from '../repositories/interfaces/alternativa.repository.interface';


@Injectable()
export class AlternativaService {
  constructor(
    @Inject('IAlternativaRepository')
    private readonly alternativaRepository: IAlternativaRepository,
  ) {}

  async create(createAlternativaDto: CreateAlternativaDto): Promise<IAlternativaDocument> {
    return this.alternativaRepository.create(createAlternativaDto);
  }

  async findAll(): Promise<IAlternativaDocument[]> {
    return this.alternativaRepository.findAllWithPopulate([
      { path: 'questaoId', select: 'enunciado' },
    ]);
  }

  async findById(id: string): Promise<IAlternativaDocument | null> {
    return this.alternativaRepository.findByIdWithPopulate(id, [
      { path: 'questaoId', select: 'enunciado' },
    ]);
  }

  async findByQuestaoId(questaoId: string): Promise<IAlternativaDocument[]> {
    return this.alternativaRepository.findByQuestaoIdWithPopulate(questaoId);
  }

  async update(
    id: string,
    updateAlternativaDto: UpdateAlternativaDto,
  ): Promise<IAlternativaDocument | null> {
    const alternativaAtualizada = await this.alternativaRepository.update(
      id,
      updateAlternativaDto,
    );
    if (!alternativaAtualizada) {
      throw new NotFoundException(`Alternativa com ID ${id} não encontrada.`);
    }
    return alternativaAtualizada;
  }

  async delete(id: string): Promise<IAlternativaDocument | null> {
    const alternativaDeletada = await this.alternativaRepository.delete(id);
    if (!alternativaDeletada) {
      throw new NotFoundException(`Alternativa com ID ${id} não encontrada.`);
    }
    return alternativaDeletada;
  }
}
