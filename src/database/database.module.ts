import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MateriaSchema } from 'src/materias/schemas/materia.schema';
import { DatabaseRepository } from './repositories/database.repository';
import { ConfigModule } from '@nestjs/config';
import { PerguntaSchema } from 'src/perguntas/schemas/pergunta.schema';
import { AlternativaSchema } from 'src/alternativas/schemas/alternativa.schema';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb://${process.env.USER_DATABASE}:${process.env.PASS_DATABASE}` +
        `@${process.env.HOST_DATABASE}:${process.env.PORT_DATABASE}` +
        `/${process.env.NAME_DATABASE}?authSource=admin`,
    ),
    MongooseModule.forFeature([
      { name: 'Materia', schema: new MateriaSchema().getSchema() },
      { name: 'Pergunta', schema: new PerguntaSchema().getSchema() },
      { name: 'Alternativa', schema: new AlternativaSchema().getSchema() },
    ]),
  ],
  providers: [DatabaseRepository],
  exports: [DatabaseRepository, MongooseModule],
})
export class DatabaseModule {}

console.log(
  'LINK BASE DE DADOS',
  `mongodb://${process.env.USER_DATABASE}:${process.env.PASS_DATABASE}` +
    `@${process.env.HOST_DATABASE}:${process.env.PORT_DATABASE}` +
    `/${process.env.NAME_DATABASE}?authSource=admin`,
);
