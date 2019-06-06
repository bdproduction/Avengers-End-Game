import * as mongoose from 'mongoose';
import Villain from './interfaces/villains.interface';
import Attributes from '../attributes/attributes.model';

const Schema = mongoose.Schema;
const VillainSchema = new Schema (
    {
      Name: String,
      Attributes: Attributes.schema,
      Description: String,
      Portrait: String
    }
  );
  const Villain = mongoose.model<Villain & mongoose.Document>('Villain', VillainSchema);
  export default Villain;
