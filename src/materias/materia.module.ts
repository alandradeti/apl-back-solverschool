import { Module } from '@nestjs/common';
import { MateriaService } from './services/materia.service';
import { MateriaController } from './controllers/materia.controller';
import { MateriaRepository } from './repositories/materia.repository';
import { Materia } from './entities/materia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaPgRepository } from './repositories/materia.pg.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Materia])],
  providers: [
    {
      provide: MateriaRepository,
      useClass: MateriaPgRepository,
    },
    MateriaService,
  ],
  controllers: [MateriaController],
})
export class MateriaModule {}