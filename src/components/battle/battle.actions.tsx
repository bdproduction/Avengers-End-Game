
import * as React from "react";
import IHero from "../heroCardComponent/interfaces/heroInterface.interface";
import HeroSelection from "../heroSelection/heroSelection.component";
import { Link } from "react-router-dom";
import _ from "lodash";
export default class BattleActions {
  // creates heroSelection elements
  renderSelectedHeroes = (selectedHeroes: IHero[], handleChange?: Function) => {
    return (<div className="hero-selection"><HeroSelection selectedHeroes={selectedHeroes} handleChange={handleChange}>
    </HeroSelection></div>
    );
  }
    getHeroIds = (heroList: IHero[]) => {
      return _.map(heroList, c=> c._id);
    }
    public getBattleRenderData = (villainsList: IHero[], selectedHeroes: IHero[]) => {
      const villainsIDs: string[] = this.getHeroIds(villainsList);
      const avengersIDs: string[] = this.getHeroIds(selectedHeroes);
      let routeParams = {pathname: "/result", state: {Villains: villainsIDs, Avengers: avengersIDs}};
      return (<div className="battle-container">
            {this.renderSelectedHeroes(villainsList)}
            <div className="selection-title">VS</div>
            {this.renderSelectedHeroes(selectedHeroes)}
        <Link to={routeParams} className="hero-submit">Battle</Link>
      </div>
      );
  }
}