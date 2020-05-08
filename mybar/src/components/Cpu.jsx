import { config, parseOutput } from "../config";
import { Colors } from "../enums";
import { styled, React } from "uebersicht";

const AppDiv = styled("div")`
  position: relative;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  margin-top: 2px;
  min-width: ${config.CPU.paddedWidth};
  flex: 0;
`;

export default class CPU extends React.Component {
  render() {
    let regex = /CPU usage: (.+?)% user, (.+?)% sys, (.+?)%/;
    let output = this.props.output;
    // === Parse Output === //
    let frontmost = parseOutput(output, "cpu");
    let matches = regex.exec(frontmost);
    if (matches.length < 3) {
      matches = [0, 0, 100];
    }
    let user = Number(matches[1]);
    let sys = Number(matches[2]) + user;

    let CpuSVG = styled("svg")`
      width: 160px;
      height: 50%;
      padding-top: 7px;
      vertical-align: -5%;
    `;

    return (
      <CpuSVG>
        <text x="0" y="15" fill="#9f7">
          cpu:{" "}
        </text>
        <rect width="100" height="30" x="50" fill="#003300" />
        <rect width={`${sys}`} x="50" height="30" fill="green" />
        <rect width={`${user}`} height="30" x="50" fill="lime" />
      </CpuSVG>
    );
  }
}
