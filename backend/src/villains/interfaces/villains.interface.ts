import { Document } from 'mongoose';
import IAttributes from '../../attributes/interfaces/attributes.interface';
interface IVillain extends Document  {
    Name: string;
    Attributes: IAttributes;
    Descriptions: string;
    Portrait: string;
  }
  export default IVillain;