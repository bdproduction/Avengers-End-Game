import IHero from "../../heroCardComponent/interfaces/heroInterface.interface";
import { RouteComponentProps } from "react-router";
export default interface IBattle extends RouteComponentProps<any> {
    villains: IHero[];
    Loading: boolean;
    error?: Error;
}