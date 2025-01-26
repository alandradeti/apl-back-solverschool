import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePerguntaDto } from '../dtos/createPergunta.dto';
import { UpdatePerguntaDto } from '../dtos/updatePergunta.dto';
import { IPerguntaDocument } from '../documents/interfaces/pergunta.document.interface';
import { IPerguntaRepository } from '../repositories/interfaces/pergunta.repository.interface';
import { convertToObjectId } from 'src/database/utils/database.utils';

@Injectable()
export class PerguntaService {
  constructor(
    @Inject('IPerguntaRepository')
    private readonly PerguntaRepository: IPerguntaRepository,
  ) {}

  private async checkMateriaExists(materiaId: string): Promise<void> {
    const materiaExists = await this.PerguntaRepository.existsById(
      materiaId,
      'materias',
    );
    if (!materiaExists) {
      throw new NotFoundException(
        `Materia com ID ${materiaId} não encontrada.`,
      );
    }
  }

  private async preparePerguntaData(
    enunciado: string,
    materiaId?: string,
  ): Promise<any> {
    if (materiaId) {
      console.log(materiaId);
      await this.checkMateriaExists(materiaId);
    }

    return {
      enunciado,
      materiaId: materiaId ? convertToObjectId(materiaId) : undefined,
    };
  }

  async create(
    createPerguntaDto: CreatePerguntaDto,
  ): Promise<IPerguntaDocument> {
    const { enunciado, materiaId } = createPerguntaDto;

    const PerguntaData = await this.preparePerguntaData(enunciado, materiaId);

    return this.PerguntaRepository.create(PerguntaData);
  }

  async findAll(): Promise<IPerguntaDocument[]> {
    return this.PerguntaRepository.findAllWithPopulate([
      { path: 'materiaId', select: 'nome descricao' },
    ]);
  }

  async findById(id: string): Promise<IPerguntaDocument | null> {
    const Pergunta = await this.PerguntaRepository.findByIdWithPopulate(id, [
      { path: 'materiaId', select: 'nome descricao' },
    ]);

    if (!Pergunta) {
      throw new NotFoundException(`Pergunta com ID ${id} não encontrada.`);
    }

    return Pergunta;
  }

  async findByMateriaId(materiaId: string): Promise<IPerguntaDocument[]> {
    return this.PerguntaRepository.findByMateriaIdWithPopulate(materiaId);
  }

  async update(
    id: string,
    updatePerguntaDto: UpdatePerguntaDto,
  ): Promise<IPerguntaDocument | null> {
    const { enunciado, materiaId } = updatePerguntaDto;

    const PerguntaData = await this.preparePerguntaData(enunciado, materiaId);

    const PerguntaAtualizada = await this.PerguntaRepository.update(
      id,
      PerguntaData,
    );

    if (!PerguntaAtualizada) {
      throw new NotFoundException(`Pergunta com ID ${id} não encontrada.`);
    }

    return PerguntaAtualizada;
  }

  async delete(id: string): Promise<IPerguntaDocument | null> {
    const PerguntaDeletada = await this.PerguntaRepository.delete(id);

    if (!PerguntaDeletada) {
      throw new NotFoundException(`Pergunta com ID ${id} não encontrada.`);
    }

    return PerguntaDeletada;
  }
}
