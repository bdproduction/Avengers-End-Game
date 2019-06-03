import IBattle from './battleInterface.interface';

export default interface IBattleService {
  getBattleByID(): Promise<IBattle>;
  postBattle(): Promise<string>;
}
