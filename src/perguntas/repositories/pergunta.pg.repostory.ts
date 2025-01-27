import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { PerguntaRepository } from './pergunta.repository';
import { Pergunta } from '../entities/pergunta.entity';
import { IPergunta } from '../entities/pergunta.entity.interface';

export class PerguntaPgRepository implements PerguntaRepository {
  constructor(
    @InjectRepository(Pergunta) private repository: Repository<Pergunta>,
  ) {}

  async findAll(limite: number, pagina: number): Promise<IPergunta[] | null> {
    const maxLimite = Math.min(limite, 50);

    return this.repository.find({
      skip: (pagina - 1) * maxLimite,
      take: limite,
    });
  }

  async findById(id: string): Promise<IPergunta | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async create(pergunta: IPergunta): Promise<IPergunta | null> {
    return await this.repository.save(pergunta);
  }

  async update(pergunta: DeepPartial<IPergunta>): Promise<IPergunta | null> {
    return await this.repository.save(pergunta);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
