import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { IMateria } from '../entities/interfaces/materia.entity.interface';
import { CreateMateriaDto } from '../dtos/createMateria.dto';
import { UpdateMateriaDto } from '../dtos/updateMateria.dto';
import { MateriaRepository } from '../repositories/materia.repository';

@Injectable()
export class MateriaService {
  constructor(private readonly materiaRepository: MateriaRepository) {}

  async findAll(limit: number, page: number): Promise<IMateria[]> {
    try {
      return await this.materiaRepository.findAll(limit, page);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar matérias.');
    }
  }

  async findAllWithEntities(
    limit: number,
    page: number,
  ): Promise<IMateria[]> {
    try {
      const populateOptions = { perguntas: true };
      return await this.materiaRepository.findAllWithEntities(
        limit,
        page,
        populateOptions,
      );
    } catch (error) {
      throw new NotFoundException('Erro ao buscar matérias.');
    }
  }

  async findByIdWithEntities(id: string): Promise<IMateria> {
    try {
      const populateOptions = { perguntas: true };
      const alternativa = await this.materiaRepository.findByIdWithEntities(
        id,
        populateOptions,
      );
      if (!alternativa) {
        throw new NotFoundException('Matéria não encontrada!');
      }
      return alternativa;
    } catch (error) {
      throw new NotFoundException('Matéria não encontrada!');
    }
  }

  async findById(id: string): Promise<IMateria> {
    try {
      const materia = await this.materiaRepository.findById(id);
      if (!materia) {
        throw new NotFoundException('Matéria não encontrada!');
      }
      return materia;
    } catch (error) {
      throw new NotFoundException('Matéria não encontrada!');
    }
  }

  async create(materia: CreateMateriaDto): Promise<IMateria> {
    try {
      return await this.materiaRepository.create(materia);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar matéria.');
    }
  }

  async update(id: string, materia: UpdateMateriaDto): Promise<void> {
    try {
      await this.materiaRepository.update(id, materia);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao atualizar matéria.');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.materiaRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao excluir matéria.');
    }
  }
}
