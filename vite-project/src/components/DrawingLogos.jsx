import styled from "styled-components";
import TREEdsMax from "./drawingLogos/3dsMax.png";
import ArnoldLogo from "./drawingLogos/ArnoldLogo.png";
import AutocadLogo from "./drawingLogos/AutocadLogo.png";
import ProgeCAD_Logo from "./drawingLogos/ProgeCAD_Logo.png";

const StyledLogos = styled.img`
  height: 60px;
  margin-top: 20px;
  margin-left: 30px;
  user-select: none;
  @media (max-width: 1300px) {
    margin: 20px;
  }
`;

const StyledSVGWid = styled(StyledLogos)`
  margin-right: 0px;
`;

const StyledDrawingLogos = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const DrawingLogos = () => {
  return (
    <StyledDrawingLogos>
      <StyledLogos src={TREEdsMax} alt="TREEdsMax" />
      <StyledLogos src={ArnoldLogo} alt="ArnoldLogo" />
      <StyledLogos src={AutocadLogo} alt="AutocadLogo" />
      <StyledLogos src={ProgeCAD_Logo} alt="ProgeCAD_Logo" />
    </StyledDrawingLogos>
  );
};

export default DrawingLogos;
