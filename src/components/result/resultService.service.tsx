import consts from "../../util/constants";
import IBattleProps from "./interfaces/BattleProps.interface";

export default class ResultService {
  consts = consts;
  public async simulateBattle(battleProps: IBattleProps) {
    // todo: Implement battle
    try {
      const response = await fetch(this.consts.API_URL + this.consts.POST_BATTLE_URL);
      let reportID = await response.json();
      return {success: reportID};
    } catch (err) {
      return {error: err, success: null};
    }
  }
  // get battle result by id
  public async getBattleByID(id: string) {
    try {
      const response = await fetch(this.consts.API_URL + this.consts.FETCH_BATTLE_URL + "/" + id);
      let reportID = await response.json();
      return {success: reportID};
    } catch (err) {
      return {error: err, success: null};
    }
  }
}