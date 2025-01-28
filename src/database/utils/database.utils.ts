import { Types } from 'mongoose';

export const convertToObjectId = (id: string) => new Types.ObjectId(id);
export const convertToObjectIds = (ids: string[]) =>
  ids.map((id) => new Types.ObjectId(id));
