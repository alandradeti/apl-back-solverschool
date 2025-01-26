import { IDatabaseDocument } from 'src/database/Documents/interfaces/database.document.interface';

export interface IMateriaDocument extends IDatabaseDocument {
  nome: string;
  descricao: string;
}
