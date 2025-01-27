import { Module } from '@nestjs/common';
import { AlternativaRepository } from './repositories/alternativa.repository';
import { AlternativaService } from './services/alternativa.service';
import { AlternativaController } from './controllers/alternativa.controller';
import { Alternativa } from './entities/alternativa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlternativaPgRepository } from './repositories/alternativa.pg.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Alternativa])],
  providers: [
    {
      provide: AlternativaRepository,
      useClass: AlternativaPgRepository,
    },
    AlternativaService,
  ],
  controllers: [AlternativaController],
})
export class AlternativaModule {}