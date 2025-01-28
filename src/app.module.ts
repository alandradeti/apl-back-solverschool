import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriaModule } from './materias/materia.module';
import { DatabaseModule } from './database/database.module';
import { PerguntaModule } from './perguntas/pergunta.module';
import { AlternativaModule } from './alternativas/alternativa.module';

@Module({
  imports: [DatabaseModule, MateriaModule, PerguntaModule, AlternativaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
