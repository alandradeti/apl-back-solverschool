import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { UpdateAlternativaDto } from '../dtos/updateAlternativa.dto';
import { CreateAlternativaDto } from '../dtos/createAlternativa.dto';
import { IAlternativa } from '../entities/alternativa.entity.interface';
import { AlternativaRepository } from '../repositories/alternativa.repository';

@Injectable()
export class AlternativaService {
  constructor(private readonly repository: AlternativaRepository) {}

  async findAll(limit: number, page: number): Promise<IAlternativa[]> {
    try {
      return await this.repository.findAll(limit, page);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar alternativas.');
    }
  }

  async findById(id: string): Promise<IAlternativa> {
    try {
      const alternativa = await this.repository.findById(id);
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
      return await this.repository.create(alternativa);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar alternativa.');
    }
  }

  async update(id: string, alternativa: UpdateAlternativaDto): Promise<IAlternativa> {
    try {
      const alternativaEncontrada = await this.findById(id);
      if (!alternativaEncontrada) {
        throw new NotFoundException('Alternativa não encontrada');
      }

      const alternativaUpdate = {
        id,
        ...alternativa,
      };

      return await this.repository.update(alternativaUpdate);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao atualizar alternativa.');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao excluir alternativa.');
    }
  }
}
