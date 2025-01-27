import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository, UpdateResult } from 'typeorm';
import { Materia } from '../entities/materia.entity';
import { MateriaRepository } from './materia.repository';
import { IMateria } from '../entities/interfaces/materia.entity.interface';

export class MateriaPgRepository implements MateriaRepository {
  constructor(
    @InjectRepository(Materia) private repository: Repository<Materia>,
  ) {}

  async findAll(limite: number, pagina: number): Promise<IMateria[] | null> {
    const maxLimite = Math.min(limite, 50);

    return this.repository.find({
      skip: (pagina - 1) * maxLimite,
      take: limite,
    });
  }

  async findById(id: string): Promise<IMateria | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async create(materia: IMateria): Promise<IMateria | null> {
    return await this.repository.save(materia);
  }

  async update(materia: DeepPartial<IMateria>): Promise<IMateria | null> {
    return await this.repository.save(materia);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
