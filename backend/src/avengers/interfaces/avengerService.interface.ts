import IAvenger from './avengers.interface';
import NewAvengerDto from '../dto/newAvenger.dto';

export default interface IAvengersService {
  getAllAvengers(): Promise<IAvenger[]>;
  deleteAllAvengers(): void;
  getAvengerByID(ID: string): Promise<IAvenger | null>;
  deleteAvengerByID(ID: string): Promise<any | null>;
  createAvenger(avenger: NewAvengerDto): Promise<IAvenger | void>;
}
