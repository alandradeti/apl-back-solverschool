import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module'; 
import { QuestaoRepository } from './repositories/questao.repository';
import { QuestaoController } from './controllers/questao.controller';
import { QuestaoService } from './services/questao.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    QuestaoService,
    {
      provide: 'IQuestaoRepository',
      useClass: QuestaoRepository,
    },
  ],
  controllers: [QuestaoController],
  exports: [QuestaoService], 
})
export class QuestaoModule {}