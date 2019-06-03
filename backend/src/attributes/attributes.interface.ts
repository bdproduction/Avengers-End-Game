import { Document } from 'mongoose';
interface IAttributes extends Document  {
    Attack: Number;
    Defense: Number;
    Health: Number;
  }
  export default IAttributes;