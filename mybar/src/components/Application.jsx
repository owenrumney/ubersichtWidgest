import { config, parseOutput } from "../config";
import { Colors } from "../enums";
import { styled, React } from "uebersicht";

const AppDiv = styled("div")`
  position: relative;
  display: inline-block;
  font-family: "FiraCode-Retina", monospace;
  padding-top: 5px;
  margin-left: 10px;
  padding-left: 5px;
  padding-right: 5px;;
  margin-bottom: 2px;
  
  border-bottom: red 3px solid;
  flex: 0;
`;

export default class Application extends React.Component {
  render() {
    let output = this.props.output;

    // === Config === //
    let cfg = config.Application;

    // === Parse Output === //
    let frontmost = parseOutput(output, "app").toUpperCase();

    return <AppDiv>{frontmost}</AppDiv>;
  }
}
