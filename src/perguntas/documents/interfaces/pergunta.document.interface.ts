import { IDatabaseDocument } from 'src/database/Documents/interfaces/database.document.interface';
import { ObjectId } from 'src/database/types/database.type';

export interface IPerguntaDocument extends IDatabaseDocument {
  enunciado: string;
  materiaId?: ObjectId;
}
