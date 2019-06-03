import * as React from "react";
import HeroCard from "../heroCardComponent/heroCard.component";
import IHeroSelection from "./HeroSelectionInterface.interface";
import IHero from "../heroCardComponent/interfaces/heroInterface.interface";
export default class HeroSelection extends React.Component<any, IHeroSelection> {
  constructor(props: IHeroSelection) {
    super(props);
  }
  // create HeroCard component list from selected heroes
  renderSelectedHeroes = () => {
    let selectedItems: any[] = [];
    if (this.props.selectedHeroes.length > 0) {
      this.props.selectedHeroes.forEach((hero: IHero, index: number) => {
        selectedItems.push(<HeroCard key={index} handleChange={this.props.handleChange} Selected={false} hero={hero}></HeroCard>);
      }
      );
    }
    return selectedItems;
  }
  render(): any {
    return this.renderSelectedHeroes();
  }
}