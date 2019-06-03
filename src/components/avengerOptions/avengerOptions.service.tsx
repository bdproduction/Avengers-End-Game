import consts from "../../util/constants";
export default class AvengersService {
  consts = consts;
  // gets all avengers from DB
     public async getAllAvengers() {
        try {
            const response = await fetch(this.consts.API_URL + this.consts.FETCH_AVENGERS_URL);
            let avengers = await response.json();
            return {success: avengers};
          }
          catch (err) {
            return {error: err, success: null};
          }
        }
}