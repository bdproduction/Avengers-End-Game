import IAvenger from './avengers.interface';

export default interface IAvengersService {
  getAllAvengers(): Promise<IAvenger[]>;
}
