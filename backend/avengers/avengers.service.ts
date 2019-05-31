import IAvengerService from './interfaces/avengersInterface.service';
import IAvenger from './interfaces/avengers.interface';
import Avenger from './Avenger.model';
import Attributes from '../attributes/Attributes.model';

export default class AvengersService implements IAvengerService {
    private avenger = Avenger;
    private avengers: any;
    public async getAllAvengers(): Promise<IAvenger[]> {
        try {
            this.avengers = await this.avenger.find().populate({ path: 'Attributes', model: Attributes }).exec();
        }
        catch (ex) {
            console.log(ex.message);
        }
        return this.avengers;
    }
    public async getAvengerByID(ID: string): Promise<IAvenger | null> {
        try {
            this.avengers = await this.avenger.findById(ID).populate({ path: 'Attributes', model: Attributes }).exec();
        }
        catch (ex) {
            console.log(ex.message);
        }
        return this.avengers;
    }
    public async deleteAvengerByID(ID: string): Promise<any | null> {
        try {
            this.avengers = await this.avenger.findByIdAndDelete(ID).exec();
        }
        catch (ex) {
            console.log(ex.message);
        }
        return true;
    }
}
