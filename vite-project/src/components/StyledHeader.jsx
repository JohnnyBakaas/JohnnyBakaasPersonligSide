import styled from "styled-components";
import WidthContainer from "./WidthContainer";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d10000;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  padding: 10px;
  user-select: none;
`;

const Nav = styled.ul`
  display: flex;
`;

const NavText = styled.li`
  all: unset;
  font-size: 24px;
  transition: transform 0.1s ease-in-out;
  user-select: none;
  transform: ${(props) => (props.selected ? "translateY(-15px)" : "none")};
`;

const NavItem = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  background-color: ${(props) => (props.selected ? "#d9d9d9" : "none")};
  &:hover {
    background-color: #d9d9d9;
    &:hover > .nav-text {
      transform: translateY(-15px);
    }
  }
`;

const StyledHeader = ({ setCurentPage, curentPage }) => {
  return (
    <WidthContainer>
      <Header>
        <StyledH1 onClick={() => setCurentPage("Hjem")}>Johnny Bakaas</StyledH1>
        <Nav>
          <NavItem
            selected={curentPage === "Ferdigheter"}
            onClick={() => setCurentPage("Ferdigheter")}
          >
            <NavText
              className="nav-text"
              selected={curentPage === "Ferdigheter"}
            >
              Ferdigheter
            </NavText>
          </NavItem>

          <NavItem
            selected={curentPage === "Portefølje"}
            onClick={() => setCurentPage("Portefølje")}
          >
            <NavText
              className="nav-text"
              selected={curentPage === "Portefølje"}
            >
              Portefølje
            </NavText>
          </NavItem>
          <NavItem
            selected={curentPage === "Om meg"}
            onClick={() => setCurentPage("Om meg")}
          >
            <NavText className="nav-text" selected={curentPage === "Om meg"}>
              Om meg
            </NavText>
          </NavItem>

          <NavItem
            selected={curentPage === "Ta kontakt"}
            onClick={() => setCurentPage("Ta kontakt")}
          >
            <NavText
              className="nav-text"
              selected={curentPage === "Ta kontakt"}
            >
              Ta kontakt
            </NavText>
          </NavItem>
        </Nav>
      </Header>
    </WidthContainer>
  );
};

export default StyledHeader;
