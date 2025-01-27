import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IMateria } from './interfaces/materia.entity.interface';

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
}
