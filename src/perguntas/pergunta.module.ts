import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PerguntaRepository } from './repositories/pergunta.repository';
import { PerguntaController } from './controllers/pergunta.controller';
import { PerguntaService } from './services/pergunta.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    PerguntaService,
    {
      provide: 'IPerguntaRepository',
      useClass: PerguntaRepository,
    },
  ],
  controllers: [PerguntaController],
  exports: [PerguntaService],
})
export class PerguntaModule {}
