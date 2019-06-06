import IAttributes from './attributes.interface';
import NewAttributesDto from '../dto/attributes.dto';

export default interface IAttrService {
    createAttributes(attr: NewAttributesDto): Promise<IAttributes | undefined>;
    deleteAttributes(): void;
}