import * as express from 'express';
import Controller from '../interfaces/Controller.interface';
import BattleService from './battle.service';

export class BattleController implements Controller {
  public path = '/battle';
  public router = express.Router();
  public battleService = new BattleService();
  constructor() {
    this.intializeRoutes();
  }
  // TODO: Get battle result data by ID
  async getBattleByID(req: any, res: any, next: any) {
    let battle: any;
    try {
      battle = await this.battleService.getBattleByID();
     }
    catch (ex) {
        console.log(ex.message);
     }
    res.json(battle);
  }
    // TODO: Post battle result
    async postBattle(req: any, res: any, next: any) {
      let battle: any;
      try {
        battle = await this.battleService.postBattle();
       }
      catch (ex) {
          console.log(ex.message);
       }
      res.json(battle);
    }
  public intializeRoutes() {
    this.router.get(this.path + '/:id', this.getBattleByID.bind(this));
  }
}