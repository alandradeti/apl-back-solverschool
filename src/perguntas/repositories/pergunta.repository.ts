import { Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { IPerguntaDocument } from '../documents/interfaces/pergunta.document.interface';
import { IPerguntaRepository } from './interfaces/pergunta.repository.interface';

@Injectable()
export class PerguntaRepository
  extends DatabaseRepository<IPerguntaDocument>
  implements IPerguntaRepository
{
  constructor(@Inject('PerguntaModel') private readonly PerguntaModel) {
    super(PerguntaModel);
  }

  async findByMateriaIdWithPopulate(
    materiaId: string,
  ): Promise<IPerguntaDocument[]> {
    return this.PerguntaModel.find({ materiaId })
      .populate([{ path: 'materiaId', select: 'nome descricao' }])
      .exec();
  }
}
