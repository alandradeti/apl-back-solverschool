import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { TipoUsuario } from 'src/usuarios/enums/usuario.enum';
import { IsEmail } from 'class-validator';
import { IUsuario } from './interfaces/usuario.entity.interface';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';

@Entity('usuario')
export class Usuario implements IUsuario {
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

  @IsEmail({}, { message: 'O e-mail fornecido não é válido.' })
  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    name: 'senha',
    type: 'varchar',
    nullable: false,
  })
  senha: string;

  @Column({
    type: 'enum',
    enum: TipoUsuario,
  })
  tipo: TipoUsuario;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Aluno, (aluno) => aluno.usuario)
  @JoinColumn()
  aluno?: Aluno;

  @OneToOne(() => Professor, (professor) => professor.usuario)
  @JoinColumn()
  professor?: Professor;
}
