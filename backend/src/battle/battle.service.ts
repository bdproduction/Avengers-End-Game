import IBattleService from './interfaces/battleInterface.service';
import IBattle from './interfaces/battleInterface.interface';

export default class BattleService implements IBattleService {
    private battle: any;
    // TODO: get battle by ID
    public async getBattleByID(): Promise<IBattle> {
        try {
        }
        catch (ex) {
            console.log(ex.message);
        }
        return this.battle;
    }
    // TODO :Post battle (input x3 avengers / x3 villains) returns battle ID
    public async postBattle(): Promise<string> {
        try {
        }
        catch (ex) {
            console.log(ex.message);
        }
        return this.battle;
    }

}
