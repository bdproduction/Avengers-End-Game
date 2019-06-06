import IVillainsService from './interfaces/villainService.interface';
import IVillain from './interfaces/villains.interface';
import Villain from './villain.model';
import _ from 'lodash';
import AttributesService from '../../src/attributes/attributes.service';
import NewVillainDto from './dto/newVillain.dto';

export default class VillainsService implements IVillainsService {
    private villain = Villain;
    private villains: any;
    private attrService = new AttributesService();
    public async getAllVillains(): Promise<IVillain[]> {
        try {
            this.villains = await this.villain.find().exec();
            this.villains = _.sampleSize(this.villains, 3);
        }
        catch (ex) {
            console.log(ex.message);
        }
        return this.villains;
    }
    public async getVillainByID(ID: string): Promise<IVillain | null> {
        try {
            this.villains = await this.villain.findById(ID).exec();
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
    // /Avengers/data
    public async createVillain(villain: NewVillainDto) {
        // create avenger attributes
        try {
            const attributes = await this.attrService.createAttributes(villain.Attributes);
            const newVillain = new this.villain(villain);
            if (attributes)
                newVillain.Attributes = attributes;
            return await newVillain.save();
        } catch (err) {
            console.log(err.message);
        }
    }
    public async deleteAllVillains() {
        this.villain.remove({}, function (err: any) {
            if (err)
                console.log(err.message);
        });
    }
}
