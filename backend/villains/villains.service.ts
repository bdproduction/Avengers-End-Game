import IVillainsService from './interfaces/villainsInterface.service';
import IVillain from './interfaces/villains.interface';
import Villain from './Villain.model';
import Attributes from '../attributes/Attributes.model';

export default class VillainsService implements IVillainsService {
    private villain = Villain;
    private villains: any;
    public async getAllVillains(): Promise<IVillain[]> {
    try {
        this.villains = await this.villain.find().populate({path: 'Attributes', model: Attributes}).exec();
    }
    catch (ex) {
        console.log(ex.message);
    }
    return this.villains;
    }
    public async getVillainByID(ID: string): Promise<IVillain | null> {
        try {
            this.villains = await this.villain.findById(ID).populate({ path: 'Attributes', model: Attributes }).exec();
        }
        catch (ex) {
            console.log(ex.message);
        }
        return this.villains;
    }
    public async deleteVillainByID(ID: string): Promise<any | null> {
        try {
            this.villains = await this.villain.findByIdAndDelete(ID).exec();
        }
        catch (ex) {
            console.log(ex.message);
        }
        return true;
    }
}
