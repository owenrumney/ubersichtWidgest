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
  
    
    let user = Number(matches[1]) / 2;
    let sys = (Number(matches[2]) / 2 ) + user;

    let CpuSVG = styled("svg")`
      width: 120px;
      height: 50%;
      padding-top: 7px;
      vertical-align: -5%;
    `;

    return (
      <CpuSVG>
        <text x="0" y="15" fill="#9f7">
          cpu:{" "}
          
        </text>
        <rect width="50" height="30" x="50" fill="#003300" >
          <title>{`${frontmost}`}</title>
        </rect>
        <rect width={`${sys}`} x="50" height="30" fill="green" />
        <rect width={`${user}`} height="30" x="50" fill="lime" />
      </CpuSVG>
    );
  }
}
