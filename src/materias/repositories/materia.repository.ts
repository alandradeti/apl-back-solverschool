import { DeepPartial } from 'typeorm';
import { IMateria } from '../entities/interfaces/materia.entity.interface';

export abstract class MateriaRepository {
  abstract findAll(limite: number, pagina: number): Promise<IMateria[] | null>;
  abstract findById(id: string): Promise<IMateria | null>;
  abstract create(materia: IMateria): Promise<IMateria | null>;
  abstract update(materia: DeepPartial<IMateria>): Promise<IMateria | null>;
  abstract delete(id: string): Promise<void>;
}