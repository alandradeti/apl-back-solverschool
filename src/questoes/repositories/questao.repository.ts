import { Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { IQuestaoDocument } from '../documents/interfaces/questao.document.interface';
import { IQuestaoRepository } from './interfaces/questao.repository.interface';

@Injectable()
export class QuestaoRepository
  extends DatabaseRepository<IQuestaoDocument>
  implements IQuestaoRepository
{
  constructor(@Inject('QuestaoModel') private readonly questaoModel) {
    super(questaoModel);
  }

  async findByMateriaIdWithPopulate(
    materiaId: string,
  ): Promise<IQuestaoDocument[]> {
    return this.questaoModel
      .find({ materiaId })
      .populate([
        { path: 'materiaId', select: 'nome descricao' },
        { path: 'alternativasIds', select: 'texto' },
      ])
      .exec();
  }
}
