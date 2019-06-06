import NewAttributesDto from 'src/attributes/dto/attributes.dto';

 class NewAvengerDto {
    constructor({Name, Portrait, Description, Attributes}: NewAvengerDto) {
        this.Name = Name;
        this.Portrait = Portrait;
        this.Description = Description;
        this.Attributes = Attributes;
    }
    readonly Name: string;
    readonly Portrait: string;
    readonly Description: string;
    readonly Attributes: NewAttributesDto;
}
export default NewAvengerDto;