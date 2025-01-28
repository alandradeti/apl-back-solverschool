import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from 'src/materias/entities/materia.entity';
import { DatabaseRepository } from './repositories/database.repository';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Turma } from 'src/turmas/entities/turma.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { ProvaPergunta } from 'src/provaPerguntas/entities/provaPergunta.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Materia]),
    TypeOrmModule.forFeature([Pergunta]),
    TypeOrmModule.forFeature([Alternativa]),
    TypeOrmModule.forFeature([Professor]),
    TypeOrmModule.forFeature([Aluno]),
    TypeOrmModule.forFeature([Turma]),
    TypeOrmModule.forFeature([Prova]),
    TypeOrmModule.forFeature([ProvaPergunta]),
  ],
  providers: [DatabaseRepository],
  exports: [DatabaseRepository, TypeOrmModule],
})
export class DatabaseModule {}
