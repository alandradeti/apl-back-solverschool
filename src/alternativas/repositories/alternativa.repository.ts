import { Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { IAlternativaRepository } from './interfaces/alternativa.repository.interface';
import { IAlternativaDocument } from '../documents/interfaces/alternativa.document.interface';
import { ObjectIdValue } from 'src/database/constants/database.constants';

@Injectable()
export class AlternativaRepository
  extends DatabaseRepository<IAlternativaDocument>
  implements IAlternativaRepository
{
  constructor(@Inject('AlternativaModel') private readonly alternativaModel) {
    super(alternativaModel);
  }

  // Buscar alternativas pela pergunta
  async findByPerguntaIdWithPopulate(
    PerguntaId: string,
  ): Promise<IAlternativaDocument[]> {
    const alternativas = await this.alternativaModel
      .find({ PerguntaId: new ObjectIdValue(PerguntaId) })
      .populate([{ path: 'PerguntaId', select: 'enunciado' }])
      .exec();

    return alternativas;
  }
}
