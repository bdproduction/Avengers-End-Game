import * as React from "react";
import HeroCard from "../heroCardComponent/heroCard.component";
import IHero from "../heroCardComponent/interfaces/heroInterface.interface";
import GalleryCarousel from "../galleryCarousel/galleryCarousel.component";

export default class AvengerGallery extends React.Component<{ avengerList: IHero[], handleChange: Function }> {
  renderAvengerList = () => {
    let listItems: any[] = [];
    if (this.props.avengerList.length > 0) {
      this.props.avengerList.forEach((hero, index) => {
        listItems.push(<HeroCard key={index} handleChange={this.props.handleChange} Selected={hero.Selected} hero={hero}></HeroCard>);
      }
      );
    }
    return <GalleryCarousel cards={listItems}></GalleryCarousel>;
  }
  render(): any {
    return this.renderAvengerList();
  }
}