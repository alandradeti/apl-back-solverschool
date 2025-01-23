import { IAlternativaDocument } from "src/alternativas/documents/interfaces/alternativa.document.interface";
import { IDatabaseRepository } from "src/database/repositories/interfaces/database.repository.interface";

export interface IAlternativaRepository extends IDatabaseRepository<IAlternativaDocument> {
  // Métodos específicos do repositório Alternativa
  findByQuestaoIdWithPopulate(questaoId: string): Promise<IAlternativaDocument[]> 
}