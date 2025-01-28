import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  Entity,
} from 'typeorm';
import { ITurma } from './interfaces/tuma.entity.interface';

@Entity('turma')
export class Turma implements ITurma {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string;

  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
  })
  nome: string;

  @ManyToMany(() => Aluno, (aluno) => aluno.turmas, {
    nullable: false,
  })
  @JoinTable()
  alunos: Aluno[];

  @ManyToMany(() => Professor, (professor) => professor.turmas, {
    nullable: false,
  })
  @JoinTable()
  professores: Professor[];
}
