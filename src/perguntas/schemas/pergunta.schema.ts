import { DatabaseSchema } from 'src/database/Schemas/database.schema';
import { ObjectIdValue } from 'src/database/constants/database.constants';
import { IPerguntaDocument } from '../documents/interfaces/pergunta.document.interface';

export class PerguntaSchema extends DatabaseSchema<IPerguntaDocument> {
  constructor() {
    super({
      enunciado: { type: String, required: true },
      materiaId: { type: ObjectIdValue, ref: 'Materia', required: false },
    });
  }
}
