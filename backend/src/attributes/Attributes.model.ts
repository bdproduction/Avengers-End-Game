import * as mongoose from 'mongoose';
import IAttributes from './attributes.interface';
const Schema = mongoose.Schema;
const AttributesSchema = new Schema(
    {
      Attack: Number,
      Health: Number,
      Defense: Number
    }
  );
  const Attributes = mongoose.model<IAttributes & mongoose.Document>('Attributes', AttributesSchema);
  export default Attributes;