import { IDatabaseRepository } from "src/database/repositories/interfaces/database.repository.interface";
import { IQuestaoDocument } from "src/questoes/documents/interfaces/questao.document.interface";

export interface IQuestaoRepository extends IDatabaseRepository<IQuestaoDocument> {
  // Métodos específicos do repositório Questão
  findByMateriaIdWithPopulate(materiaId: string): Promise<IQuestaoDocument[]> 
}
