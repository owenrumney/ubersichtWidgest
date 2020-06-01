import { config, parseOutput } from "../config";
import { Colors } from "../enums";
import { styled, React } from "uebersicht";

export default class CPU extends React.Component {
  render() {
    let regex = /CPU usage: (.+?)% user, (.+?)% sys, (.+?)%/;
    let output = this.props.output;
    // === Parse Output === //
    let frontmost = parseOutput(output, "cpu");
    let matches = regex.exec(frontmost);
  
    
    let user = Number(matches[1]).toPrecision(3);
    let sys = Number(matches[2]).toPrecision(3);
    let idle = Number(matches[3]).toPrecision(4);

    const CpuDiv = styled("div")`
      position: relative;
      display: inline-block;
      font-family: "FiraCode-Retina", monospace;
      padding: 5px 15px 5px 15px;
      background: #0a0072;
      color: white;s
      flex: 0;
    `;

    return (
      <CpuDiv>CPU: 
        {`${user}`}/{`${sys}`}/{`${idle}`}
      </CpuDiv>
    );
  }
}
