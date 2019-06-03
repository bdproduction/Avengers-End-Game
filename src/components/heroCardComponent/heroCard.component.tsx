import * as React from "react";
import IHeroCard from "./interfaces/heroCardInterface.interface";
import "../avengerOptions/avengersOptions.scss";

export default class HeroCard extends React.Component<any, IHeroCard> {
   constructor(props: IHeroCard) {
      super(props);
    }
    // heroCard on click
    handleChange (id: string) {
       if(this.props.handleChange != null) {
       return this.props.handleChange(id);
       }
    }
    // is HeroCard selected
    getSelectedClass(selected: boolean) {
      if(selected) {
         return "hero-card hero-selected";
      }
         return "hero-card";
    }
   public render(): any {
      return (
         <div className={this.getSelectedClass(this.props.Selected)} onClick={() => this.handleChange(this.props.hero._id)}>
                     <div className="portrait-header">
               <div className="portrait-title">{this.props.hero.Name}</div>
            </div>
            <div className="portrait-wrapper">
               <img className="hero-portrait" src={this.props.hero.Portrait} ></img>
            </div>
            <div className="portrait-body">
               <div className="portrait-attribute">
               <span className="attack-icon"></span>{this.props.hero.Attributes.Attack}</div>
               <div className="portrait-attribute">
               <span className="defense-icon"></span>{this.props.hero.Attributes.Defense}</div>
               <div className="portrait-attribute">
               <span className="health-icon"></span>{this.props.hero.Attributes.Health}</div>
            </div>
         </div>
      );
   }
}