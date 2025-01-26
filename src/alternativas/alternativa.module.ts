import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AlternativaRepository } from './repositories/alternativa.repository';
import { AlternativaService } from './services/alternativa.service';
import { AlternativaController } from './controllers/alternativa.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    AlternativaService,
    {
      provide: 'IAlternativaRepository',
      useClass: AlternativaRepository,
    },
  ],
  controllers: [AlternativaController],
  exports: [AlternativaService],
})
export class AlternativaModule {}
