import NewAttributesDto from './dto/attributes.dto';
import IAttrService from './interfaces/attributesService.interface';
import IAttributes from './interfaces/attributes.interface';
import Attributes from './attributes.model';

export default class AttributesService implements IAttrService {
    async createAttributes(attr: NewAttributesDto): Promise<IAttributes | undefined> {
        try {
            const newAttr = new Attributes(attr);
            return await newAttr.save();
        } catch (err) {
            console.log(err.message);
        }
        return undefined;
    }
    // delete attribute by ID (not implemented)
    async deleteAttributeByID(id: string) {
        await Attributes.findByIdAndDelete(id);
    }
    // delete all attributes /api/Attributes/delete
    public deleteAttributes() {
        Attributes.remove({}, function (err: any) {
            if (err)
                console.log(err.message);
        });
    }
}