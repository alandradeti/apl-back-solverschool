import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriaModule } from './materias/materia.module';
import { DatabaseModule } from './database/database.module';
import { QuestaoModule } from './questoes/questao.module';
import { AlternativaModule } from './alternativas/alternativa.module';

@Module({
  imports: [
    DatabaseModule, 
    MateriaModule,
    QuestaoModule,
    AlternativaModule,
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
