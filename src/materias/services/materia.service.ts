import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IMateriaRepository } from '../repositories/interfaces/materia.repository.interface';
import { CreateMateriaDto } from '../dtos/createMateria.dto';
import { UpdateMateriaDto } from '../dtos/updateMateria.dto';
import { IMateriaDocument } from '../documents/interfaces/materia.document.interface';

@Injectable()
export class MateriaService {
  constructor(
    @Inject('IMateriaRepository')
    private readonly materiaRepository: IMateriaRepository,
  ) {}

  async create(materia: CreateMateriaDto): Promise<IMateriaDocument> {
    return this.materiaRepository.create(materia);
  }

  async findById(id: string): Promise<IMateriaDocument | null> {
    return this.materiaRepository.findById(id);
  }

  async findAll(): Promise<IMateriaDocument[]> {
    return this.materiaRepository.findAll({});
  }

  async update(id: string, materia: UpdateMateriaDto): Promise<IMateriaDocument | null> {
    const materiaAtualizada = await this.materiaRepository.update(id, materia);
    if (!materiaAtualizada) {
      throw new NotFoundException(`Matéria com ID ${id} não encontrada para atualização.`);
    }
    return materiaAtualizada;
  }

  async delete(id: string): Promise<IMateriaDocument | null> {
    const materiaDeletada = await this.materiaRepository.delete(id);
    if (!materiaDeletada) {
      throw new NotFoundException(`Matéria com ID ${id} não encontrada para exclusão.`);
    }
    
    return materiaDeletada;
  }

  async findByName(nome: string): Promise<IMateriaDocument[]> {
    return this.materiaRepository.findByName(nome);
  }
}
