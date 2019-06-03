import IHero from "./heroInterface.interface";

interface IHeroCard extends Document  {
    key: number;
    handleChange?: Function;
    hero: IHero;
    Selected: boolean;
  }
  export default IHeroCard;