import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { Pergunta } from '../entities/pergunta.entity';

@Injectable()
export class PerguntaRepository extends DatabaseRepository<Pergunta> {
  constructor(
    @InjectRepository(Pergunta)
    private readonly perguntaRepository: Repository<Pergunta>,
  ) {
    super(perguntaRepository);
  }

  //Métodos personalizados para Pergunta
}
