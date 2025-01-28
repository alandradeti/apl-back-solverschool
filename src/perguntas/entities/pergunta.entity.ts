import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IPergunta } from './interfaces/pergunta.entity.interface';
import { ProvaPergunta } from 'src/provaPerguntas/entities/provaPergunta.entity';

@Entity({
  name: 'pergunta',
})
export class Pergunta implements IPergunta {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string;

  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
  })
  enunciado: string;

  @ManyToOne(() => Materia, (materia) => materia.perguntas, {
    nullable: false,
  })
  materia: Materia;

  @OneToMany(() => Alternativa, (alternativa) => alternativa.pergunta, {
    cascade: true,
  })
  alternativas?: Alternativa[];

  @OneToMany(() => ProvaPergunta, (provaPergunta) => provaPergunta.pergunta)
  provaPerguntas?: ProvaPergunta[];
}
