import { DeepPartial, FindOptionsWhere } from 'typeorm';

export interface IDatabaseRepository<T> {
    /**
     * Cria e salva uma nova entidade.
     * @param data Dados da entidade.
     * @returns A entidade criada.
     */
    create(data: DeepPartial<T>): Promise<T>;

    /**
     * Busca uma entidade pelo ID.
     * @param id ID da entidade.
     * @returns A entidade encontrada ou `null`.
     */
    findById(id: string | number): Promise<T | null>;

    /**
     * Busca uma entidade com base em uma consulta.
     * @param query Condições de busca.
     * @returns A entidade encontrada ou `null`.
     */
    findOne(query: FindOptionsWhere<T>): Promise<T | null>;

    /**
     * Busca todas as entidades que correspondem a uma consulta.
     * @param query Condições de busca.
     * @returns Lista de entidades.
     */
    findAll(query: FindOptionsWhere<T>): Promise<T[]>;

    /**
     * Atualiza uma entidade pelo ID.
     * @param id ID da entidade.
     * @param data Dados para atualizar.
     * @returns A entidade atualizada ou `null`.
     */
    update(id: string | number, data: DeepPartial<T>): Promise<T | null>;

    /**
     * Remove uma entidade pelo ID.
     * @param id ID da entidade.
     * @returns A entidade removida ou `null`.
     */
    delete(id: string | number): Promise<T | null>;
}
