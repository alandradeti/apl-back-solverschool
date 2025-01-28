import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IAlternativa } from './interfaces/alternativa.entity.interface';

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
    default: false,
  })
  correta: boolean;

  @ManyToOne(() => Pergunta, (pergunta) => pergunta.alternativas,{
    nullable: false
  })
  pergunta: Pergunta;
}
