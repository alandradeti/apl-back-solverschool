export interface IDatabaseRepository<T> {
  create(data: Partial<T>): Promise<T>;
  findById(id: string): Promise<T | null>;
  findOne(query: any): Promise<T | null>;
  findAll(query: any): Promise<T[]>;
  update(id: string, data: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<T | null>;
  findAllWithPopulate(populateOptions: any): Promise<T[]>;
  findByIdWithPopulate(id: string, populateOptions: any): Promise<T | null>;
}
