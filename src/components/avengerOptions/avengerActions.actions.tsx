
import * as React from "react";
import IHero from "../heroCardComponent/interfaces/heroInterface.interface";
import HeroSelection from "../heroSelection/heroSelection.component";
import AvengerGallery from "../avengerGallery/avengerGallery.component";
import { Link } from "react-router-dom";
import _ from "lodash";
export default class AvengerActions {
  // on heroCard mouse click
  public eventHandler = (id: string, heroList: IHero[], selectedHeroes: IHero[]) => {
    return this.heroSelection(id, heroList, selectedHeroes);
  }
  // add or remove selected hero by ID
  heroSelection = (id: string, heroList: IHero[], selectedHeroes: IHero[]) => {
    heroList.forEach(c => {
      if(c._id === id) {
        if(c.Selected) {
        c.Selected = !c.Selected;
      } else if (heroList.filter(a => a.Selected).length < 3) {
        c.Selected = !c.Selected;
      } }
    });
    selectedHeroes = heroList.filter(c => c.Selected === true);
    return { avengersData: heroList, selectedHeroes: selectedHeroes };
  }
  // creates heroSelection elements
  renderSelectedHeroes = (selectedHeroes: IHero[], handleChange?: Function) => {
    return (<div className="hero-selection"><HeroSelection selectedHeroes={selectedHeroes} handleChange={handleChange}>
    </HeroSelection></div>
    );
  }
  // creates heroGallery component
  renderAvengerList = (avengerList: IHero[], handleChange: Function) => {
    return (<AvengerGallery avengerList={avengerList} handleChange={handleChange}>
    </AvengerGallery>
    );
  }
  public getRenderData = (heroList: IHero[], selectedHeroes: IHero[], handleChange: Function) => {
    let routeParams = {pathname: "/battle", state: selectedHeroes};
    return (<div className="heroes-container">
    {this.renderAvengerList(heroList, handleChange)}
      <div className="selection-title">SELECT 3 AVENGERS</div>
          {this.renderSelectedHeroes(selectedHeroes, handleChange)}
      {selectedHeroes.length === 3 &&
      <Link to={routeParams} className="hero-submit">Find Villains</Link>
      }
    </div>
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