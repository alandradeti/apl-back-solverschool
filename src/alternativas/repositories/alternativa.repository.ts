import { DeepPartial } from 'typeorm';
import { IAlternativa } from '../entities/alternativa.entity.interface';
export abstract class AlternativaRepository {
  abstract findAll(limite: number, pagina: number): Promise<IAlternativa[] | null>;
  abstract findById(id: string): Promise<IAlternativa | null>;
  abstract create(alternativa: IAlternativa): Promise<IAlternativa | null>;
  abstract update(alternativa: DeepPartial<IAlternativa>): Promise<IAlternativa| null>;
  abstract delete(id: string): Promise<void>;
}