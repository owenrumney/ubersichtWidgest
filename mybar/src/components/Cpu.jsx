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
    let user = matches[1];
    let sys = matches[2];
    let offset = Number(user) + 50;

    let TimeSVG = styled("svg")`
      width: 160px;
      height: 50%;
      padding-top: 7px;
      vertical-align: -5%;
    `;

    return (
      <TimeSVG>
        <text x="0" y="15" fill="#9f7">
          cpu:{" "}
        </text>
        <rect width="100" height="30" x="50" fill="#003300" />
        <rect width={`${user}`} height="30" x="50" fill="yellowgreen" />
        <rect width={`${sys}`} x={`${offset}`} height="30" fill="lime" />
      </TimeSVG>
    );
  }
}
