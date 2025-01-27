import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { IMateria } from '../entities/interfaces/materia.entity.interface';
import { MateriaRepository } from '../repositories/materia.repository';
import { CreateMateriaDto } from '../dtos/createMateria.dto';
import { UpdateMateriaDto } from '../dtos/updateMateria.dto';

@Injectable()
export class MateriaService {
  constructor(private readonly repository: MateriaRepository) {}

  async findAll(limit: number, page: number): Promise<IMateria[]> {
    try {
      return await this.repository.findAll(limit, page);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar matérias.');
    }
  }

  async findById(id: string): Promise<IMateria> {
    try {
      const materia = await this.repository.findById(id);
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
      return await this.repository.create(materia);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar matéria.');
    }
  }

  async update(id: string, materia: UpdateMateriaDto): Promise<IMateria> {
    try {
      const materiaEncontrada = await this.findById(id);
      if (!materiaEncontrada) {
        throw new NotFoundException('Matéria não encontrada');
      }

      const materiaUpdate = {
        id,
        ...materia,
      };

      return await this.repository.update(materiaUpdate);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao atualizar matéria.');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao excluir matéria.');
    }
  }
}
