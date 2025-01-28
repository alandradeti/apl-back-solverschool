import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from 'src/materias/entities/materia.entity';
import { DatabaseRepository } from './repositories/database.repository';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Alternativa } from 'src/alternativas/entities/alternativa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Materia]),
    TypeOrmModule.forFeature([Pergunta]),
    TypeOrmModule.forFeature([Alternativa]),
  ],
  providers: [DatabaseRepository],
  exports: [DatabaseRepository, TypeOrmModule],
})
export class DatabaseModule {}
