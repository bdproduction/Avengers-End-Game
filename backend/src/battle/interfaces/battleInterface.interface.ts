import { Document } from 'mongoose';
import { Timestamp } from 'bson';
import IAttacks from './attacks.interface';
interface IBattle extends Document  {
    BattleTimestamp: Timestamp;
    Attacks: IAttacks[];
    Winner: string;
  }
  export default IBattle;