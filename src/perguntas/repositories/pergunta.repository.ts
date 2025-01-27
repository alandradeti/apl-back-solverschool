import { DeepPartial } from 'typeorm';
import { IPergunta } from '../entities/pergunta.entity.interface';
export abstract class PerguntaRepository {
  abstract findAll(limite: number, pagina: number): Promise<IPergunta[] | null>;
  abstract findById(id: string): Promise<IPergunta | null>;
  abstract create(pergunta: IPergunta): Promise<IPergunta | null>;
  abstract update(pergunta: DeepPartial<IPergunta>): Promise<IPergunta| null>;
  abstract delete(id: string): Promise<void>;
}