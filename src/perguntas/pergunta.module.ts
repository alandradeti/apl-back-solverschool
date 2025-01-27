import { Module } from '@nestjs/common';
import { PerguntaRepository } from './repositories/pergunta.repository';
import { PerguntaController } from './controllers/pergunta.controller';
import { PerguntaService } from './services/pergunta.service';
import { Pergunta } from './entities/pergunta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerguntaPgRepository } from './repositories/pergunta.pg.repostory';

@Module({
  imports: [TypeOrmModule.forFeature([Pergunta])],
  providers: [
    {
      provide: PerguntaRepository,
      useClass: PerguntaPgRepository,
    },
    PerguntaService,
  ],
  controllers: [PerguntaController],
})
export class PerguntaModule {}