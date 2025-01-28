import { Module } from '@nestjs/common';
import { AlternativaRepository } from './repositories/alternativa.repository';
import { AlternativaService } from './services/alternativa.service';
import { AlternativaController } from './controllers/alternativa.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule], 
  providers: [
    AlternativaService,
    AlternativaRepository
  ],
  controllers: [AlternativaController],
})
export class AlternativaModule {}