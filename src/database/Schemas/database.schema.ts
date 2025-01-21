import { Schema, model, Model } from 'mongoose';
import { IDatabaseDocument } from '../Documents/interfaces/database.document.interface';

export class DatabaseSchema<T> {
  private schema: Schema;

  constructor(fields: Record<string, any>) {
    this.schema = new Schema(fields, { timestamps: true });
  }

  public createModel(modelName: string): Model<T & IDatabaseDocument> {
    if (!modelName) {
      throw new Error('Model name is required to create a Mongoose model.');
    }
    return model<T & IDatabaseDocument>(modelName, this.schema);
  }

  public getSchema(): Schema {
    return this.schema;
  }
}