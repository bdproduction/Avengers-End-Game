import * as mongoose from 'mongoose';
import Avenger from './interfaces/avengers.interface';
import Attributes from '../attributes/attributes.model';

const Schema = mongoose.Schema;
const AvengerSchema = new Schema (
    {
      Name: String,
      Attributes: Attributes.schema,
      Description: String,
      Portrait: String
    }
  );
  const Avenger = mongoose.model<Avenger & mongoose.Document>('Avenger', AvengerSchema);
  export default Avenger;
