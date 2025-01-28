import { IDatabaseRepository } from 'src/database/repositories/interfaces/database.repository.interface';
import { IPerguntaDocument } from 'src/perguntas/documents/interfaces/pergunta.document.interface';

export interface IPerguntaRepository
  extends IDatabaseRepository<IPerguntaDocument> {
  // Métodos específicos do repositório Pergunta
  findByMateriaIdWithPopulate(materiaId: string): Promise<IPerguntaDocument[]>;
}
