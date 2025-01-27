import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IAlternativa } from './alternativa.entity.interface';
import { IPergunta } from 'src/perguntas/entities/pergunta.entity.interface';

@Entity({
  name: 'alternativa',
})
export class Alternativa implements IAlternativa {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string;

  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
  })
  descricao: string;

  @Column({
    name: 'correta',
    type: 'boolean',
    nullable: false,
  })
  correta: boolean;

  @ManyToOne(() => Pergunta, (pergunta) => pergunta.alternativas)
  pergunta: IPergunta;
}
