import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { Alternativa } from '../entities/alternativa.entity';

@Injectable()
export class AlternativaRepository extends DatabaseRepository<Alternativa> {
  constructor(
    @InjectRepository(Alternativa)
    private readonly alternativaRepository: Repository<Alternativa>,
  ) {
    super(alternativaRepository);
  }

  //Métodos personalizados para Alternativa
}
