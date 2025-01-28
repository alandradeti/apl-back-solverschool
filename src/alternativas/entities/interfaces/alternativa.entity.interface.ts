import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';

export interface IAlternativa {
  id?: string;
  descricao: string;
  correta: boolean;
  pergunta: IPergunta;
}
