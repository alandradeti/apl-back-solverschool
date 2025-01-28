import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UpdateAlternativaDto } from '../dtos/updateAlternativa.dto';
import { CreateAlternativaDto } from '../dtos/createAlternativa.dto';
import { IAlternativa } from '../entities/alternativa.entity.interface';
import { AlternativaRepository } from '../repositories/alternativa.repository';

@Injectable()
export class AlternativaService {
  constructor(private readonly alternativaRepository: AlternativaRepository) {}

  async findAll(limit: number, page: number): Promise<IAlternativa[]> {
    try {
      return await this.alternativaRepository.findAll(limit, page);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar alternativas.');
    }
  }

  async findAllWithEntities(
    limit: number,
    page: number,
  ): Promise<IAlternativa[]> {
    try {
      const populateOptions = { pergunta: true };
      return await this.alternativaRepository.findAllWithEntities(
        limit,
        page,
        populateOptions,
      );
    } catch (error) {
      throw new NotFoundException('Erro ao buscar alternativas.');
    }
  }

  async findByIdWithEntities(id: string): Promise<IAlternativa> {
    try {
      const populateOptions = { pergunta: true };
      const alternativa = await this.alternativaRepository.findByIdWithEntities(
        id,
        populateOptions,
      );
      if (!alternativa) {
        throw new NotFoundException('Alternativa não encontrada!');
      }
      return alternativa;
    } catch (error) {
      throw new NotFoundException('Alternativa não encontrada!');
    }
  }

  async findById(id: string): Promise<IAlternativa> {
    try {
      const alternativa = await this.alternativaRepository.findById(id);
      if (!alternativa) {
        throw new NotFoundException('Alternativa não encontrada!');
      }
      return alternativa;
    } catch (error) {
      throw new NotFoundException('Alternativa não encontrada!');
    }
  }

  async create(alternativa: CreateAlternativaDto): Promise<IAlternativa> {
    try {
      return await this.alternativaRepository.create(alternativa);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar alternativa.');
    }
  }

  async update(id: string, alternativa: UpdateAlternativaDto): Promise<void> {
    try {
      await this.alternativaRepository.update(id, alternativa);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao atualizar alternativa.');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.alternativaRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao excluir alternativa.');
    }
  }
}
