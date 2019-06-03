import consts from "../../util/constants";

export default class ResultService {
  consts = consts;
  public async simulateBattle() {
    try {
      const response = await fetch(this.consts.API_URL + this.consts.POST_BATTLE_URL);
      let reportID = await response.json();
      return {success: reportID};
    } catch (err) {
      return {error: err, success: null};
    }
  }
  public async getBattleByID(id: string) {
    try {
      const response = await fetch(this.consts.API_URL + this.consts.FETCH_BATTLE_URL + id);
      let reportID = await response.json();
      return {success: reportID};
    } catch (err) {
      return {error: err, success: null};
    }
  }
}