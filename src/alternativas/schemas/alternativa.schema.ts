import { DatabaseSchema } from 'src/database/Schemas/database.schema';
import { IAlternativaDocument } from '../documents/interfaces/alternativa.document.interface';

export class AlternativaSchema extends DatabaseSchema<IAlternativaDocument> {
  constructor() {
    super({
      texto: { type: String, required: true },
      correta: { type: String, required: true },
      questaoId:{ type: String, ref: 'Questao', required: false },
    });
  }
}