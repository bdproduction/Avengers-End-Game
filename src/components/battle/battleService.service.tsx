import consts from "../../util/constants";

export default class BattleService {
  consts = consts;
  // get 3 random villains
  public async getAllVillains() {
    try {
      const response = await fetch(this.consts.API_URL + this.consts.FETCH_VILLAINS_URL);
      let villains = await response.json();
      return {success: villains};
    } catch (err) {
      return {error: err, success: null};
    }
  }
}