import { Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { IMateriaRepository } from './interfaces/materia.repository.interface';
import { IMateria } from 'src/database/entities/materias/interfaces/materia.entitie.interface';

@Injectable()
export class MateriaRepository
  extends DatabaseRepository<IMateria>
  implements IMateriaRepository
{
  constructor(@Inject('IMateriaRepository') private readonly materiaRepository) {
    super(materiaRepository);
  }

  // Implementação de métodos específicos do repositório Materia
  async findByName(nome: string): Promise<IMateria[]> {
    return this.materiaRepository
      .find({
        nome: { $regex: nome, $options: 'i' },
      })
      .exec();
  }
}