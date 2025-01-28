import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IProvaPergunta } from 'src/provaPerguntas/entities/interfaces/provaPergunta.entity.interface';

export interface IProva {
  id?: string;
  titulo: string;
  materia: IMateria;
  alunos: IAluno[];
  professores: IProfessor[];
  provaPerguntas: IProvaPergunta[];
}
