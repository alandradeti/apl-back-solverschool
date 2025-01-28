import { DatabaseSchema } from 'src/database/Schemas/database.schema';
import { IAlternativaDocument } from '../documents/interfaces/alternativa.document.interface';
import { ObjectIdValue } from 'src/database/constants/database.constants';

export class AlternativaSchema extends DatabaseSchema<IAlternativaDocument> {
  constructor() {
    super({
      descricao: { type: String, required: true },
      correta: { type: String, required: true },
      PerguntaId: { type: ObjectIdValue, ref: 'Pergunta', required: false },
    });
  }
}
