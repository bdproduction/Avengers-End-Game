import IHero from "../heroCardComponent/interfaces/heroInterface.interface";

interface IHeroSelection {
    selectedHeroes: IHero[];
    handleChange?: Function;
  }
  export default IHeroSelection;