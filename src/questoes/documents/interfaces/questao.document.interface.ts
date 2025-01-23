import { IDatabaseDocument } from 'src/database/Documents/interfaces/database.document.interface';

export interface IQuestaoDocument extends IDatabaseDocument {
  enunciado: string;
  materiaId?: string;
  alternativasIds?: string[];
}