import { Materia } from 'src/materias/entities/materia.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { IProfessor } from './interfaces/professor.entity.interface';
import { Turma } from 'src/turmas/entities/turma.entity';
import { Prova } from 'src/provas/entities/prova.entity';

@Entity('professor')
export class Professor implements IProfessor {
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

  @OneToOne(() => Usuario, (usuario) => usuario.professor, {
    nullable: false,
  })
  @JoinColumn()
  usuario: Usuario;

  @ManyToMany(() => Materia, (materia) => materia.professores, {
    nullable: false,
  })
  materias: Materia[];

  @ManyToMany(() => Turma, (turma) => turma.professores, {
    nullable: false,
  })
  turmas: Turma[];

  @OneToMany(() => Prova, (prova) => prova.professores)
  provas?: Prova[];
}
