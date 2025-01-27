import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreatePerguntaDto } from 'src/perguntas/dtos/createPergunta.dto';
import { UpdatePerguntaDto } from 'src/perguntas/dtos/updatePergunta.dto';
import { IPergunta } from 'src/perguntas/entities/pergunta.entity.interface';
import { PerguntaRepository } from 'src/perguntas/repositories/pergunta.repository';

@Injectable()
export class PerguntaService {
  constructor(private readonly repository: PerguntaRepository) {}

  async findAll(limit: number, page: number): Promise<IPergunta[]> {
    try {
      return await this.repository.findAll(limit, page);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar perguntas.');
    }
  }

  async findById(id: string): Promise<IPergunta> {
    try {
      const pergunta = await this.repository.findById(id);
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
      return await this.repository.create(pergunta);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar pergunta.');
    }
  }

  async update(id: string, pergunta: UpdatePerguntaDto): Promise<IPergunta> {
    try {
      const perguntaEncontrada = await this.findById(id);
      if (!perguntaEncontrada) {
        throw new NotFoundException('Pergunta não encontrada');
      }

      const perguntaUpdate = {
        id,
        ...pergunta,
      };

      return await this.repository.update(perguntaUpdate);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao atualizar pergunta.');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao excluir pergunta.');
    }
  }
}
