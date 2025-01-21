import { Document } from 'mongoose';

// Interface que define a estrutura básica de um documento do Mongoose
export interface IDatabaseDocument extends Document {
  createdAt?: Date;  
  updatedAt?: Date;  
}
