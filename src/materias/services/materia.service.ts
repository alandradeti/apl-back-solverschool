import { Injectable, NotFoundException } from '@nestjs/common';
import { IMateria } from '../entities/interfaces/materia.entity.interface';
import { MateriaRepository } from '../repositories/materia.repository';
import { CreateMateriaDto } from '../dtos/createMateria.dto';
import { UpdateMateriaDto } from '../dtos/updateMateria.dto';
@Injectable()
export class MateriaService {
  constructor(private readonly repository: MateriaRepository) {}

  async findAll(limit: number, page: number): Promise<IMateria[]> {
    return this.repository.findAll(limit, page);
  }

  async findById(id: string): Promise<IMateria> {
    const materia = await this.repository.findById(id);
    if (!materia) throw new NotFoundException('Materia não encontrada!');
    return materia;
  }

  async create(materia: CreateMateriaDto): Promise<IMateria> {
    return await this.repository.create(materia);
  }

  async update(id: string, materia: UpdateMateriaDto): Promise<IMateria> {
    const materiaEncontrada = await this.findById(id);
    if (!materiaEncontrada) {
      throw new Error('Matéria não encontrada');
    }

    const materiaUpdate = {
      id : id,
      ...materia
    }

    return await this.repository.update(materiaUpdate);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
