import { Document, Schema } from 'mongoose';
import { Timestamp } from 'bson';
import IAvenger from 'src/avengers/interfaces/avengers.interface';
import IVillain from 'src/villains/interfaces/villains.interface';
interface IAttacks extends Document  {
    BattleID: Schema.Types.ObjectId;
    Attacker: IAvenger;
    Victim: IVillain;
  }
  export default IAttacks;