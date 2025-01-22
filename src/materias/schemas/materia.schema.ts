import { DatabaseSchema } from 'src/database/Schemas/database.schema';
import { IMateriaDocument } from '../document/materia.document.interface';

export class MateriaSchema extends DatabaseSchema<IMateriaDocument> {
  constructor() {
    super({
      nome: { type: String, required: true, unique: true },
      descricao: { type: String, required: true },
    });
  }
}
