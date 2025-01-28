import { Injectable } from '@nestjs/common';
import { Materia } from '../entities/materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';

@Injectable()
export class MateriaRepository extends DatabaseRepository<Materia> {
  constructor(
    @InjectRepository(Materia)
    private readonly materiaRepository: Repository<Materia>,
  ) {
    super(materiaRepository);
  }

  //Métodos personalizados para Materia
}
