import { Module } from '@nestjs/common';
import { MateriaService } from './services/materia.service';
import { MateriaController } from './controllers/materia.controller';
import { MateriaRepository } from './repositories/materia.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MateriaController],
  providers: [
    MateriaService,
    {
      provide: 'IMateriaRepository',
      useClass: MateriaRepository,
    },
  ],
  
  exports: [MateriaService],
})
export class MateriaModule {}