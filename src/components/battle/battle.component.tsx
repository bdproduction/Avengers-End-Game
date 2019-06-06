import * as React from "react";
import IBattle from "./interfaces/BattleInterface.interface";
import AvengerActions from "../avengerOptions/avengerActions.actions";
import IHero from "../heroCardComponent/interfaces/heroInterface.interface";
import BattleService from "./battleService.service";
export default class Battle extends React.Component <IBattle, IBattle> {
    actions = new AvengerActions();
    battleService = new BattleService();

    constructor (props: IBattle) {
        super(props);
        this.state = {...this.props, villains: [], Loading: true};
    }
    // on component load
    async componentDidMount(): Promise<any> {
        if(this.props.location.state) {
            console.log(this.props);
            // get 3 random villains
        let response: any = await this.battleService.getAllVillains();
        if (response.error) {
          this.setState({ Loading: false,  error: response.error  });
        } else {
          let villainsData: IHero[] = response.success;
          this.setState({ villains: villainsData, Loading: false });
        }
    }
    }
    public render(): any {
        if (this.state.Loading) {
            return <div className="loader"><p className="loading-text">Loading...</p></div>;
          }
          if(this.state.villains.length < 1) {
            return <div className="loader"><p className="loading-text">No Villains Cards Found. Insert data</p></div>;
          }
          if (this.state.error) {
            return (<div className="loader"><p className="loading-text">{this.state.error.message}</p></div>);
          } else {
          return (this.actions.getBattleRenderData(this.state.villains, this.props.location.state));
          }
        }
}
