import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IAlternativaDocument } from '../documents/interfaces/alternativa.document.interface';
import { UpdateAlternativaDto } from '../dtos/updateAlternativa.dto';
import { CreateAlternativaDto } from '../dtos/createAlternativa.dto';
import { IAlternativaRepository } from '../repositories/interfaces/alternativa.repository.interface';
import { convertToObjectId } from 'src/database/utils/database.utils';

@Injectable()
export class AlternativaService {
  constructor(
    @Inject('IAlternativaRepository')
    private readonly alternativaRepository: IAlternativaRepository,
  ) {}

  private async checkPerguntaExists(PerguntaId: string): Promise<void> {
    const materiaExists = await this.alternativaRepository.existsById(
      PerguntaId,
      'perguntas',
    );
    if (!materiaExists) {
      throw new NotFoundException(
        `Materia com ID ${PerguntaId} não encontrada.`,
      );
    }
  }

  private async prepareAlternativaData(
    descricao: string,
    correta: boolean,
    PerguntaId?: string,
  ): Promise<any> {
    if (PerguntaId) {
      await this.checkPerguntaExists(PerguntaId);
    }

    return {
      descricao,
      correta,
      PerguntaId: PerguntaId ? convertToObjectId(PerguntaId) : undefined,
    };
  }

  async create(
    createAlternativaDto: CreateAlternativaDto,
  ): Promise<IAlternativaDocument> {
    const { descricao, correta, PerguntaId } = createAlternativaDto;
    const alternativaData = await this.prepareAlternativaData(
      descricao,
      correta,
      PerguntaId,
    );
    return this.alternativaRepository.create(alternativaData);
  }

  async findAll(): Promise<IAlternativaDocument[]> {
    return this.alternativaRepository.findAllWithPopulate([
      { path: 'PerguntaId', select: 'enunciado' },
    ]);
  }

  async findById(id: string): Promise<IAlternativaDocument | null> {
    return this.alternativaRepository.findByIdWithPopulate(id, [
      { path: 'PerguntaId', select: 'enunciado' },
    ]);
  }

  async findByPerguntaId(PerguntaId: string): Promise<IAlternativaDocument[]> {
    return this.alternativaRepository.findByPerguntaIdWithPopulate(PerguntaId);
  }

  async update(
    id: string,
    updateAlternativaDto: UpdateAlternativaDto,
  ): Promise<IAlternativaDocument | null> {
    const { descricao, correta, PerguntaId } = updateAlternativaDto;
    const alternativaData = await this.prepareAlternativaData(
      descricao,
      correta,
      PerguntaId,
    );
    const alternativaAtualizada = await this.alternativaRepository.update(
      id,
      alternativaData,
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
