import { IDatabaseDocument } from 'src/database/Documents/interfaces/database.document.interface';
import { ObjectId } from 'src/database/types/database.type';

export interface IAlternativaDocument extends IDatabaseDocument {
  descricao: string;
  correta: boolean;
  PerguntaId?: ObjectId;
}
