import { DatabaseSchema } from 'src/database/Schemas/database.schema';
import { IQuestaoDocument } from '../documents/interfaces/questao.document.interface';

export class QuestaoSchema extends DatabaseSchema<IQuestaoDocument> {
  constructor() {
    super({
      enunciado: { type: String, required: true },
      materiaId: { type: String, ref: 'Materia', required: false },
      alternativasIds: [{ type: String, ref: 'Alternativa', required: false }],
    });
  }
}