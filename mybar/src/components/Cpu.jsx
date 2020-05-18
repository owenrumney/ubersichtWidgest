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

    let CpuSVG = styled("svg")`
      width: 150px;
      height: 50%;
      padding-top: 7px;
      vertical-align: -5%;
    `;

    const CpuDiv = styled("div")`
      position: relative;
      display: inline-block;
      font-family: "FiraCode-Retina", monospace;
      margin-top: 5px;
      padding-left: 10px;
      min-width: ${config.CPU.paddedWidth};
      flex: 0;
    `;

    return (
      <CpuDiv>cpu: 
        {`${user}`}/{`${sys}`}/{`${idle}`}
      </CpuDiv>
    );

      // <CpuSVG>
      //   <text x="0" y="15" fill="#9f7">
      //     cpu:{" "}
          
      //   </text>
      //   <rect width="50" height="30" x="50" fill="#003300" >
      //     <title>{`${frontmost}`}</title>
      //   </rect>
      //   <rect width={`${sys}`} x="50" height="30" fill="green" />
      //   <rect width={`${user}`} height="30" x="50" fill="lime" />
      // </CpuSVG>
  }
}
