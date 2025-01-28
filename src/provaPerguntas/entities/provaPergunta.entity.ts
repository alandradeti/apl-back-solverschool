import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Prova } from 'src/provas/entities/prova.entity';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';

@Entity('exam_questions')
export class ProvaPergunta {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @ManyToOne(() => Prova, (prova) => prova.provaPerguntas, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  prova: Prova;

  @ManyToOne(() => Pergunta, (pergunta) => pergunta.provaPerguntas, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  pergunta: Pergunta;
}
