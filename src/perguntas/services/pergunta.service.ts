import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePerguntaDto } from 'src/perguntas/dtos/createPergunta.dto';
import { UpdatePerguntaDto } from 'src/perguntas/dtos/updatePergunta.dto';
import { PerguntaRepository } from 'src/perguntas/repositories/pergunta.repository';
import { IPergunta } from '../entities/interfaces/pergunta.entity.interface';

@Injectable()
export class PerguntaService {
  constructor(private readonly perguntaRepository: PerguntaRepository) {}

  async findAll(limit: number, page: number): Promise<IPergunta[]> {
    try {
      return await this.perguntaRepository.findAll(limit, page);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar perguntas.');
    }
  }

  async findAllWithEntities(limit: number, page: number): Promise<IPergunta[]> {
    try {
      const populateOptions = { alternativas: true };
      return await this.perguntaRepository.findAllWithEntities(
        limit,
        page,
        populateOptions,
      );
    } catch (error) {
      throw new NotFoundException('Erro ao buscar perguntas.');
    }
  }

  async findByIdWithEntities(id: string): Promise<IPergunta> {
    try {
      const populateOptions = { alternativas: true };
      const alternativa = await this.perguntaRepository.findByIdWithEntities(
        id,
        populateOptions,
      );
      if (!alternativa) {
        throw new NotFoundException('Pergunta não encontrada!');
      }
      return alternativa;
    } catch (error) {
      throw new NotFoundException('Pergunta não encontrada!');
    }
  }

  async findById(id: string): Promise<IPergunta> {
    try {
      const pergunta = await this.perguntaRepository.findById(id);
      if (!pergunta) {
        throw new NotFoundException('Pergunta não encontrada!');
      }
      return pergunta;
    } catch (error) {
      throw new NotFoundException('Pergunta não encontrada!');
    }
  }

  async create(pergunta: CreatePerguntaDto): Promise<IPergunta> {
    try {
      return await this.perguntaRepository.create(pergunta);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar pergunta.');
    }
  }

  async update(id: string, pergunta: UpdatePerguntaDto): Promise<void> {
    try {
      await this.perguntaRepository.update(id, pergunta);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao atualizar pergunta.');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.perguntaRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao excluir pergunta.');
    }
  }
}
