import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { AlternativaRepository } from './alternativa.repository';
import { Alternativa } from '../entities/alternativa.entity';
import { IAlternativa } from '../entities/alternativa.entity.interface';

export class AlternativaPgRepository implements AlternativaRepository {
  constructor(
    @InjectRepository(Alternativa) private repository: Repository<Alternativa>,
  ) {}

  async findAll(limite: number, pagina: number): Promise<IAlternativa[] | null> {
    const maxLimite = Math.min(limite, 50);

    return this.repository.find({
      skip: (pagina - 1) * maxLimite,
      take: limite,
    });
  }

  async findById(id: string): Promise<IAlternativa | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async create(alternativa: IAlternativa): Promise<IAlternativa | null> {
    return await this.repository.save(alternativa);
  }

  async update(alternativa: DeepPartial<IAlternativa>): Promise<IAlternativa | null> {
    return await this.repository.save(alternativa);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
