import { IPergunta } from "src/perguntas/entities/interfaces/pergunta.entity.interface";

export interface IAlternativa {
  id?: string | undefined;
  descricao: string;
  correta: boolean;
  pergunta: IPergunta;
}
