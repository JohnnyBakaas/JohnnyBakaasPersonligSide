import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import WidthContainer from "./WidthContainer";
import { useEffect, useState } from "react";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d10000;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    //display: none;
  }
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  padding: 10px;
  user-select: none;
  cursor: pointer;
`;

const Nav = styled.ul`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    display: ${(props) => (props.selected ? "none" : "flex")};
    //display: none;
  }
`;

const NavText = styled.li`
  all: unset;
  font-size: 24px;
  transition: transform 0.1s ease-in-out;
  user-select: none;
  transform: ${(props) => (props.selected ? "translateY(-15px)" : "none")};
  @media (max-width: 900px) {
    transform: translateY(0);
  }
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
  @media (max-width: 900px) {
    background-color: white;
    &:hover {
      background-color: #ffffff;
      &:hover > .nav-text {
        transform: translateY(0);
      }
    }
  }
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const TheHamburglarContainer = styled.div`
  display: none;
  @media (max-width: 900px) {
    padding: 20px 10px 17px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const TheHamburglerBarz = styled.div`
  width: 38px;
  height: 4px;
  background-color: #d10000;
  border-radius: 3px;
`;

const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const StyledHeader = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  const togleShowNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    setShowNav(true);
  }, [location]);

  return (
    <WidthContainer>
      <Header>
        <MobileHeader>
          <StyledLink to="/">
            <StyledH1>Johnny Bakaas</StyledH1>
          </StyledLink>
          <TheHamburglarContainer onClick={togleShowNav}>
            <TheHamburglerBarz />
            <TheHamburglerBarz />
            <TheHamburglerBarz />
          </TheHamburglarContainer>
        </MobileHeader>

        <Nav selected={showNav}>
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
