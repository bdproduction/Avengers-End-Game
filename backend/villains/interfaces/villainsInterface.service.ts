import IVillain from './villains.interface';

export default interface IVillainsService {
  getAllVillains(): Promise<IVillain[]>;
}
