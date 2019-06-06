import * as mongoose from 'mongoose';
import Attributes from './interfaces/attributes.interface';

const Schema = mongoose.Schema;
const AttributesSchema = new Schema(
    {
      Attack: Number,
      Health: Number,
      Defense: Number
    }
  );
  const Attributes = mongoose.model<Attributes & mongoose.Document>('Attributes', AttributesSchema);
  export default Attributes;