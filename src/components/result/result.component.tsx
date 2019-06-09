
import * as React from "react";
import ResultService from "./resultService.service";
import IResult from "./interfaces/Resultnterface.interface";

export default class Result extends React.Component<IResult> {
    resultService = new ResultService();
    constructor(props: IResult) {
        super(props);
        this.state = { ...this.props };
    }
    // on component load
    async componentDidMount() {
        if (this.props.location.state) {
            console.log(this.props);
            // post battle - return battle ID
            let response = await this.resultService.simulateBattle(this.props.location.state);
            if (response.error) {
                this.setState({ Loading: false, error: response.error });
            } else {
                // get battle by id
                let battleID: string = response.success;
                let battle = await this.resultService.getBattleByID(battleID);
                if (response.error) {
                    this.setState({ Loading: false, error: response.error });
                } else {
                    this.setState({ battle: battle, Loading: false });
                }
            }
        }
    }
    public render() {
        return (
            <div>Result</div>
        );
    }
}
