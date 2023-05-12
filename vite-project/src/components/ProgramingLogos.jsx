import CSarp from "./programingLogos/CSharp.svg";
import arduino from "./programingLogos/arduino-ar21.svg";
import dotNet from "./programingLogos/dotnet-vertical.svg";
import JSLogo from "./programingLogos/JS.svg";
import mysql from "./programingLogos/mysql-ar21.svg";
import nodejs from "./programingLogos/nodejs-icon.svg";
import ReactLogo from "./programingLogos/React-icon.svg";
import styled from "styled-components";

const StyledSVG = styled.img`
  height: 58px;
  margin-top: 20px;
  margin-right: 30px;
  user-select: none;
`;

const StyledSVGWid = styled(StyledSVG)`
  margin-right: 0px;
`;

const StyledProgramingLogos = styled.div`
  display: flex;
`;

const ProgramingLogos = () => {
  return (
    <StyledProgramingLogos>
      <StyledSVG src={JSLogo} alt="JSLogo" />
      <StyledSVG src={ReactLogo} alt="React" />
      <StyledSVG src={nodejs} alt="nodejs" />
      <StyledSVG src={CSarp} alt="CSarp" />
      <StyledSVG src={dotNet} alt="dotNet" />
      <StyledSVGWid src={mysql} alt="mysql" />
      <StyledSVGWid src={arduino} alt="arduino" />
    </StyledProgramingLogos>
  );
};

export default ProgramingLogos;
