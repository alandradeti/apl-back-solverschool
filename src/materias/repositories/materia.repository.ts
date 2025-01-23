import { Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { IMateriaRepository } from './interfaces/materia.repository.interface';
import { IMateriaDocument } from '../documents/interfaces/materia.document.interface';

@Injectable()
export class MateriaRepository
  extends DatabaseRepository<IMateriaDocument>
  implements IMateriaRepository
{
  constructor(@Inject('MateriaModel') private readonly materiaModel) {
    super(materiaModel);
  }

  // Implementação de métodos específicos do repositório Materia
  async findByName(nome: string): Promise<IMateriaDocument[]> {
    return this.materiaModel
      .find({
        nome: { $regex: nome, $options: 'i' },
      })
      .exec();
  }
}
