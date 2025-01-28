import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IMateria } from './interfaces/materia.entity.interface';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';

@Entity({
  name: 'materia',
})
export class Materia implements IMateria {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string | undefined;

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
}
