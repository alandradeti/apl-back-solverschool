import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MateriaRepository } from './repositories/materia.repository';
import { MateriaService } from './services/materia.service';
import { MateriaController } from './controllers/materia.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    MateriaService,
    {
      provide: 'IMateriaRepository',
      useClass: MateriaRepository,
    },
  ],
  controllers: [MateriaController],
  exports: [MateriaService],
})
export class MateriaModule {}
