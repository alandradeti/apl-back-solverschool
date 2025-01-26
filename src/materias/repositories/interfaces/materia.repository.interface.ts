import { IMateria } from "src/database/entities/materias/interfaces/materia.entitie.interface";
import { IDatabaseRepository } from "src/database/repositories/interfaces/database.repository.interface";

export interface IMateriaRepository extends IDatabaseRepository<IMateria> {
  // Método específico do repositório Materia
  findByName(nome: string): Promise<IMateria[]>;
}