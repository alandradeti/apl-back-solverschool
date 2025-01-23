import { IDatabaseDocument } from 'src/database/Documents/interfaces/database.document.interface';

export interface IAlternativaDocument extends IDatabaseDocument {
  texto: string;
  correta: boolean;
  questaoId?: string;
}