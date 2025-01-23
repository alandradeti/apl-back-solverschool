import { Model } from 'mongoose';
import { IDatabaseDocument } from '../Documents/interfaces/database.document.interface';
import { IDatabaseRepository } from './interfaces/database.repository.interface';

export class DatabaseRepository<T extends IDatabaseDocument> implements IDatabaseRepository<T> {
  protected readonly model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    const document = new this.model(data);
    const savedDocument = await document.save();
    return savedDocument.toObject();
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).lean().select('-__v').exec() as Promise<T | null>;
  }

  async findOne(query: any): Promise<T | null> {
    return this.model.findOne(query).lean().select('-__v').exec() as Promise<T | null>;
  }

  async findAll(query: any): Promise<T[]> {
    return this.model.find(query).lean().select('-__v').exec() as Promise<T[]>;
  }

  async findAllWithPopulate(populateOptions: any): Promise<T[]> {
    return this.model.find().populate(populateOptions).lean().select('-__v').exec() as Promise<T[]>;
  }
  async findByIdWithPopulate(id: string, populateOptions: any): Promise<T | null> {
    return this.model.findById(id).populate(populateOptions).lean().select('-__v').exec() as Promise<T | null>; 
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return this.model
      .findByIdAndUpdate(id, { $set: data }, { new: true })
      .lean()
      .select('-__v')
      .exec() as Promise<T | null>;
  }

  async delete(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
