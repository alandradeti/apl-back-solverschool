import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IMateria } from './interfaces/materia.entity.interface';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { Prova } from 'src/provas/entities/prova.entity';

@Entity({
  name: 'materia',
})
export class Materia implements IMateria {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string;

  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  nome: string;

  @Column({
    name: 'descricao',
    type: 'varchar',
    nullable: false,
  })
  descricao: string;

  @OneToMany(() => Pergunta, (pergunta) => pergunta.materia, {
    cascade: true,
  })
  perguntas?: Pergunta[];

  @ManyToMany(() => Professor, (professor) => professor.materias)
  professores?: Professor[];

  @OneToMany(() => Prova, (prova) => prova.materia, {
    cascade: true,
  })
  provas?: Prova[];
}
