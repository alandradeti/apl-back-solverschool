import { DeepPartial, FindOptionsRelations } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IDatabaseRepository<T> {
  findAllWithEntities(
    limit: number,
    page: number,
    populateOptions: FindOptionsRelations<T>,
  ): Promise<T[]>;
  findByIdWithEntities(
    id: string,
    populateOptions: FindOptionsRelations<T>,
  ): Promise<T | null>;
  findAll(page: number, limit: number): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(entity: DeepPartial<T>): Promise<T>;
  update(id: string, entity: QueryDeepPartialEntity<T>): Promise<void>;
  delete(id: string): Promise<void>;
}
