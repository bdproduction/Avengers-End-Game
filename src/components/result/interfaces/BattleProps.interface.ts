import IHero from "../../heroCardComponent/interfaces/heroInterface.interface";

export default interface IBattleProps {
    BattleProps: {
        Avengers: IHero[],
        Villains: IHero[]
    }
}