import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IPergunta } from './pergunta.entity.interface';
import { IAlternativa } from 'src/alternativas/entities/alternativa.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';

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

  @OneToMany(() => Materia, (materia) => materia.perguntas)
  materia?: IMateria;

  @ManyToOne(() => Alternativa, (alternativa) => alternativa.pergunta)
  alternativas: IAlternativa[];
}
