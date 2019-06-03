import * as mongoose from 'mongoose';
import Attack from '../interfaces/attacks.interface';
import Avenger from 'src/avengers/Avenger.model';
import { number } from 'prop-types';
const Schema = mongoose.Schema;
const AttackSchema = new Schema (
    {
      BattleID: Schema.Types.ObjectId,
      Attacker: Avenger.schema,
      Victim: Avenger.schema,
      AttackOrder: number,
      Killed: Schema.Types.Boolean
    }
  );
  const Attack = mongoose.model<Attack & mongoose.Document>('Attack', AttackSchema);
  export default Attack;
