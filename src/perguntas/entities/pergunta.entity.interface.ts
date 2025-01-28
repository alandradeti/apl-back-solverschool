import { IAlternativa } from 'src/alternativas/entities/alternativa.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';

export interface IPergunta {
  id?: string;
  enunciado: string;
  materia: IMateria;
  alternativas?: IAlternativa[];
}
