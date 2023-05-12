import { Link, useLocation } from "react-router-dom";
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
  cursor: pointer;
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

const NavItem = styled(Link)`
  all: unset;
  cursor: pointer;
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

const StyledLink = styled(Link)`
  all: unset;
`;

const StyledHeader = () => {
  const location = useLocation();

  return (
    <WidthContainer>
      <Header>
        <StyledLink to="/">
          <StyledH1>Johnny Bakaas</StyledH1>
        </StyledLink>
        <Nav>
          <NavItem
            to="/ferdigheter"
            selected={location.pathname === "/ferdigheter"}
          >
            <NavText
              className="nav-text"
              selected={location.pathname === "/ferdigheter"}
            >
              Ferdigheter
            </NavText>
          </NavItem>

          <NavItem
            to="/portefolje"
            selected={location.pathname === "/portefolje"}
          >
            <NavText
              className="nav-text"
              selected={location.pathname === "/portefolje"}
            >
              Portefølje
            </NavText>
          </NavItem>

          <NavItem to="/om-meg" selected={location.pathname === "/om-meg"}>
            <NavText
              className="nav-text"
              selected={location.pathname === "/om-meg"}
            >
              Om meg
            </NavText>
          </NavItem>

          <NavItem
            to="/ta-kontakt"
            selected={location.pathname === "/ta-kontakt"}
          >
            <NavText
              className="nav-text"
              selected={location.pathname === "/ta-kontakt"}
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
