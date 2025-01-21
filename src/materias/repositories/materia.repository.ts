import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { IMateriaDocument } from '../Document/materia.document.interface';
import { IMateriaRepository } from './interfaces/materia.repository.interface';

@Injectable()
export class MateriaRepository extends DatabaseRepository<IMateriaDocument> implements IMateriaRepository {
  constructor(@InjectModel('Materia') materiaModel: Model<IMateriaDocument>) {
    super(materiaModel); 
  }

  // Implementação de métodos específicos do repositório Materia
  async findByName(nome: string): Promise<IMateriaDocument[]> {
    return this.model.find({
      nome: { $regex: nome, $options: 'i' }
    }).exec();
  }
}
