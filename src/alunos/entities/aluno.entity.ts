import { Turma } from 'src/turmas/entities/turma.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { IAluno } from './interfaces/aluno.entity.interface';
import { Prova } from 'src/provas/entities/prova.entity';

@Entity('aluno')
export class Aluno implements IAluno {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string;

  @Column({
    name: 'matricula',
    type: 'varchar',
    nullable: false,
  })
  matricula: string;

  @OneToOne(() => Usuario, (usuario) => usuario.aluno, {
    nullable: false,
  })
  @JoinColumn()
  usuario: Usuario;

  @ManyToMany(() => Turma, (turma) => turma.alunos, {
    nullable: false,
  })
  turmas: Turma[];

  @ManyToMany(() => Prova, (prova) => prova.alunos)
  provas?: Prova[];
}
