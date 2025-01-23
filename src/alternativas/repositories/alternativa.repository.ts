import { Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { IAlternativaRepository } from './interfaces/alternativa.repository.interface';
import { IAlternativaDocument } from '../documents/interfaces/alternativa.document.interface';

@Injectable()
export class AlternativaRepository
  extends DatabaseRepository<IAlternativaDocument>
  implements IAlternativaRepository
{
  constructor(@Inject('AlternativaModel') private readonly alternativaModel) {
    super(alternativaModel);
  }

  // Buscar alternativas pela questão
  async findByQuestaoIdWithPopulate(
    questaoId: string,
  ): Promise<IAlternativaDocument[]> {
    return this.alternativaModel
      .find({ questaoId })
      .populate([{ path: 'questaoId', select: 'enunciado' }])
      .exec();
  }
}
