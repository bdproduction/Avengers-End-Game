import IAvengerService from './interfaces/avengerService.interface';
import IAvenger from './interfaces/avengers.interface';
import Avenger from './avenger.model';
import NewAvengerDto from './dto/newAvenger.dto';
import AttributesService from '../attributes/attributes.service';

export default class AvengersService implements IAvengerService {
    private avenger = Avenger;
    private avengers: any;
    private attrService = new AttributesService();
    // /Avengers
    public async getAllAvengers(): Promise<IAvenger[]> {
        try {
            this.avengers = await this.avenger.find().exec();
        }
        catch (ex) {
            console.log(ex.message);
        }
        return this.avengers;
    }
    // /Avengers/id
    public async getAvengerByID(ID: string): Promise<IAvenger | null> {
        try {
            this.avengers = await this.avenger.findById(ID).exec();
        }
        catch (ex) {
            console.log(ex.message);
        }
        return this.avengers;
    }
    // /Avengers/delete/id
    public async deleteAvengerByID(ID: string): Promise<any | null> {
        try {
            this.avengers = await this.avenger.findByIdAndDelete(ID).exec();
        }
        catch (ex) {
            console.log(ex.message);
        }
        return true;
    }
    // /Avengers/data
    public async createAvenger(avenger: NewAvengerDto) {
        // create avenger attributes
        try {
            const attributes = await this.attrService.createAttributes(avenger.Attributes);
        const newAvenger = new this.avenger(avenger);
        if (attributes)
            newAvenger.Attributes = attributes;
        return await newAvenger.save();
        } catch (err) {
            console.log(err.message);
        }
    }
    public async deleteAllAvengers() {
        this.avenger.remove({}, function(err: any) {
            if (err)
                console.log(err.message);
        });
    }
}
