import { Repository, FindOptionsWhere, DeepPartial, FindOptionsRelations, FindOptionsRelationByString } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IDatabaseRepository } from './interfaces/database.repository.interface';

export class DatabaseRepository<T> implements IDatabaseRepository<T> {
  constructor(private readonly repository: Repository<T>) {}

  // async findAllWithEntities(populateOptions: string[]): Promise<T[]> {
  //   const queryBuilder = this.repository.createQueryBuilder('entity');
  
  //   populateOptions.forEach((relation) => {
  //     queryBuilder.leftJoinAndSelect(`entity.${relation}`, relation);
  //   });
  
  //   return await queryBuilder.getMany();
  // }


  async findAllWithEntities(limit: number, page: number, populateOptions: FindOptionsRelations<T>): Promise<T[]> {
    const skip = (page - 1) * limit;
    return await this.repository.find({
      relations: populateOptions,
      take: limit,
      skip: skip,
    });
  }

  async findByIdWithEntities(id: string, populateOptions: FindOptionsRelations<T>): Promise<T | null> {
    return await this.repository.findOne({
      relations: populateOptions,
      where: { id } as unknown as FindOptionsWhere<T>,
    });
  }

  async findAll(limit: number, page: number): Promise<T[]> {
    const skip = (page - 1) * limit;
    return await this.repository.find({
      take: limit,
      skip: skip,
    });
  }

  async findById(id: string): Promise<T | null> {
    return await this.repository.findOne({
      where: { id } as unknown as FindOptionsWhere<T>,
    });
  }

  async create(entity: DeepPartial<T>): Promise<T> {
    const newEntity = this.repository.create(entity);
    return await this.repository.save(newEntity);
  }

  async update(id: string, entity: QueryDeepPartialEntity<T>): Promise<void> {
    await this.repository.update(id, entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
