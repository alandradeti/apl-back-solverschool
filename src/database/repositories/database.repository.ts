import { Repository, DeepPartial, FindOptionsWhere } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class DatabaseRepository<T> {
  protected readonly repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  /**
   * Cria e salva uma nova entidade.
   * @param data Dados da entidade.
   * @returns A entidade criada.
   */
  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  /**
   * Busca uma entidade pelo ID.
   * @param id ID da entidade.
   * @returns A entidade encontrada ou `null`.
   */
  async findById(id: string | number): Promise<T | null> {
    const entity = await this.repository.findOne({
      where: { id } as unknown as FindOptionsWhere<T>,
    });
    return entity || null;
  }

  /**
   * Busca uma entidade com base em uma consulta.
   * @param query Condições de busca.
   * @returns A entidade encontrada ou `null`.
   */
  async findOne(query: FindOptionsWhere<T>): Promise<T | null> {
    const entity = await this.repository.findOneBy(query);
    return entity || null;
  }

  /**
   * Busca todas as entidades que correspondem a uma consulta.
   * @param query Condições de busca.
   * @returns Lista de entidades.
   */
  async findAll(query: FindOptionsWhere<T> = {}): Promise<T[]> {
    return this.repository.findBy(query);
  }

  /**
   * Atualiza uma entidade pelo ID.
   * @param id ID da entidade.
   * @param data Dados para atualizar.
   * @returns A entidade atualizada ou `null`.
   */
  async update(id: string | number, data: DeepPartial<T>): Promise<T | null> {
    const entity = await this.findById(id);
    if (!entity) return null;

    // Garantindo que o tipo seja compatível com QueryDeepPartialEntity
    await this.repository.update(id, data as QueryDeepPartialEntity<T>);
    return this.findById(id);
  }

  /**
   * Remove uma entidade pelo ID.
   * @param id ID da entidade.
   * @returns A entidade removida ou `null`.
   */
  async delete(id: string | number): Promise<T | null> {
    const entity = await this.findById(id);
    if (!entity) return null;

    await this.repository.delete(id);
    return entity;
  }
}
