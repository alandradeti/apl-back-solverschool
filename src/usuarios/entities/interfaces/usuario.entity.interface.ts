import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { TipoUsuario } from 'src/usuarios/enums/usuario.enum';

export interface IUsuario {
  id?: string;
  nome: string;
  email: string;
  senha: string;
  tipo: TipoUsuario;
  aluno?: IAluno;
  professor?: IProfessor;
}
