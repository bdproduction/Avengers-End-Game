import * as React from "react";
import AvengersService from "./avengerOptions.service";
import IHero from "../heroCardComponent/interfaces/heroInterface.interface";
import "./avengersOptions.scss";
import AvengerActions from "./avengerActions.actions";
import IAvengerOptions from "./interfaces/IavengerOptions.interface";
export default class AvengerOptions extends React.Component<{}, IAvengerOptions> {
  actions = new AvengerActions();
  avengersService = new AvengersService();

  constructor(props: any) {
    super(props);
    this.state = { avengersData: [], selectedAvengers: [], Loading: true, error: undefined };
  }
  // heroCard mouse event pass id string for filtering
  handleChange = (id: string) => {
    let data: any = this.actions.eventHandler(id, this.state.avengersData, this.state.selectedAvengers);
    this.setState({ selectedAvengers: data.selectedHeroes });
  }
  // on component load
  async componentDidMount(): Promise<any> {
    let response: any = await this.avengersService.getAllAvengers();
    if (response.error) {
      this.setState({ Loading: false,  error: response.error  });
    } else {
      let avengersData: IHero[] = response.success;
      this.setState({ avengersData: avengersData, Loading: false });
    }
  }
  render = () => {
    if (this.state.Loading) {
      return <div className="loader"><p className="loading-text">Loading...</p></div>;
    }
    if (this.state.avengersData.length < 1) {
      return <div className="loader"><p className="loading-text">No Avenger Cards Found. Insert data</p></div>;
    }
    if (this.state.error) {
      return (<div className="loader"><p className="loading-text">{this.state.error.message}</p></div>);
    }
    return (this.actions.getRenderData(this.state.avengersData, this.state.selectedAvengers, this.handleChange));
  }
}