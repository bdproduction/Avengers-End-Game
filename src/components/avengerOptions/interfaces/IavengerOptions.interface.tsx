import IHero from "../../heroCardComponent/interfaces/heroInterface.interface";

export default interface IAvengerOptions {
    avengersData: IHero[];
    selectedAvengers: IHero[];
    Loading: boolean;
    error?: Error;
}