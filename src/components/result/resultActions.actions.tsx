
import * as React from "react";
import IHero from "../heroCardComponent/interfaces/heroInterface.interface";
import HeroSelection from "../heroSelection/heroSelection.component";
import AvengerGallery from "../avengerGallery/avengerGallery.component";
import { BrowserRouter, Link } from "react-router-dom";

export default class AvengerActions {
  // on card mouse event
  public eventHandler = (id: string, avengersList: IHero[], selectedAvengers: IHero[]) => {
    return this.heroSelection(id, avengersList, selectedAvengers);
  }
  // add / remove hero card from selected cards
  heroSelection = (id: string, avengersList: IHero[], selectedAvengers: IHero[]) => {
    avengersList.forEach(c => {
      if(c._id === id) {
        if(c.Selected) {
        c.Selected = !c.Selected;
      } else if (avengersList.filter(a => a.Selected).length < 3) {
        c.Selected = !c.Selected;
      } }
    });
    selectedAvengers = avengersList.filter(c => c.Selected === true);
    return { avengersData: avengersList, selectedAvengers: selectedAvengers };
  }
  // create 
  renderSelectedHeroes = (selectedAvengers: IHero[], handleChange?: Function) => {
    return (<div className="hero-selection"><HeroSelection selectedHeroes={selectedAvengers} handleChange={handleChange}>
    </HeroSelection>
      </div>
    );
  }
  renderAvengerList = (avengerList: IHero[], handleChange: Function) => {
    return (<AvengerGallery avengerList={avengerList} handleChange={handleChange}>
    </AvengerGallery>
    );
  }
  public getRenderData = (avengersList: IHero[], selectedAvengers: IHero[], handleChange: Function) => {
    let routeParams = {pathname: "/battle", state: selectedAvengers}
    return (<div className="heroes-container">
    {this.renderAvengerList(avengersList, handleChange)}
      <div className="selection-title">SELECT 3 AVENGERS</div>
          {this.renderSelectedHeroes(selectedAvengers, handleChange)}
      }
      {selectedAvengers.length === 3 &&
      <Link to={routeParams} className="hero-submit">Find Villains</Link>
      }
    </div>
    );
    }
    public getBattleRenderData = (villainsList: IHero[], selectedAvengers: IHero[]) => {
      let routeParams = {pathname: "/result", state: selectedAvengers};
      return (<div className="battle-container">
            {this.renderSelectedHeroes(villainsList)}
            <div className="selection-title">VS</div>
            {this.renderSelectedHeroes(selectedAvengers)}

        <Link to={routeParams} className="hero-submit">Battle</Link>
        }
      </div>
      );
  }
}