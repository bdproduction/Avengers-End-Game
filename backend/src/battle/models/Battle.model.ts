import * as mongoose from 'mongoose';
import Battle from '../interfaces/battleInterface.interface';
import { Timestamp } from 'bson';
import Attack from './Attacks.model';
const Schema = mongoose.Schema;
const BattleSchema = new Schema (
    {
      BattleTimestamp: Timestamp,
      Attacks: Attack.schema,
      Winner: String,
    }
  );
  const Battle = mongoose.model<Battle & mongoose.Document>('Battle', BattleSchema);
  export default Battle;
