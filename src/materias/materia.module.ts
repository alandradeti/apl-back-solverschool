import { Module } from '@nestjs/common';
import { MateriaService } from './services/materia.service';
import { MateriaRepository } from './repositories/materia.repository';
import { MateriaController } from './controllers/materia.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule], 
  providers: [MateriaService, MateriaRepository],  
  exports: [MateriaService], 
  controllers: [MateriaController],
})
export class MateriaModule {}