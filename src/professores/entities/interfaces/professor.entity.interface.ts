import { Materia } from 'src/materias/entities/materia.entity';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { ITurma } from 'src/turmas/entities/interfaces/tuma.entity.interface';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

export interface IProfessor {
  id?: string;
  matricula: string;
  usuario: Usuario;
  materias: Materia[];
  turmas: ITurma[];
  provas?: IProva[];
}
