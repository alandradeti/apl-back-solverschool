import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IProvaPergunta } from 'src/provaPerguntas/entities/interfaces/provaPergunta.entity.interface';

export interface IPergunta {
  id?: string;
  enunciado: string;
  materia: IMateria;
  alternativas?: IAlternativa[];
  provaPerguntas?: IProvaPergunta[];
}
