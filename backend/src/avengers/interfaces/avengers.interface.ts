import { Document } from 'mongoose';
import IAttributes from '../../attributes/interfaces/attributes.interface';
interface IAvenger extends Document  {
    Name: string;
    Attributes: IAttributes;
    Description: string;
    Portrait: string;
  }
  export default IAvenger;