import { IPergunta } from "src/perguntas/entities/interfaces/pergunta.entity.interface";
import { IProva } from "src/provas/entities/interfaces/prova.entity.interface";

export interface IProvaPergunta {
  id?: string;
  prova: IProva;
  pergunta: IPergunta;
}
