import { Module } from '@nestjs/common';
import { PerguntaRepository } from './repositories/pergunta.repository';
import { PerguntaController } from './controllers/pergunta.controller';
import { PerguntaService } from './services/pergunta.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PerguntaService, PerguntaRepository],
  controllers: [PerguntaController],
})
export class PerguntaModule {}
