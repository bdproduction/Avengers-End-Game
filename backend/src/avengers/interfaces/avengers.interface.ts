import { Document } from 'mongoose';
import IAttributes from '../../attributes/attributes.interface';
interface IAvenger extends Document  {
    Name: string;
    Attributes: IAttributes;
    Descriptions: string;
    Portrait: string;
  }
  export default IAvenger;