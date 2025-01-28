import { IPergunta } from "src/perguntas/entities/interfaces/pergunta.entity.interface";

export interface IMateria {
  id?: string;
  nome: string;
  descricao: string;
  perguntas?: IPergunta[];
}