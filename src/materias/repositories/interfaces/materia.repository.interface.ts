import { IDatabaseRepository } from 'src/database/repositories/interfaces/database.repository.interface';
import { IMateriaDocument } from 'src/materias/documents/interfaces/materia.document.interface';

export interface IMateriaRepository
  extends IDatabaseRepository<IMateriaDocument> {
  // Métodos específicos do repositório Materia
  findByName(nome: string): Promise<IMateriaDocument[]>;
}
