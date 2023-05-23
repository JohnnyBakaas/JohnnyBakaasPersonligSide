import styled from "styled-components";
import CTAButton from "./CTAButton";
import ContentContainer from "./ContentContainer";
import StyledP from "./StyledP";
import GitHubLogo from "./images/GithubLogo.svg";
import LinkedInLogo from "./images/linkedIn.svg";

const Sfooter = styled.footer`
  background-color: black;
  color: white;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.a`
  all: unset;
  cursor: pointer;
`;

const StyledLinkTlfAndEmail = styled(StyledLink)`
  border-bottom: 1px solid white;
`;

const StyledLogos = styled.img`
  user-select: none;
  width: 100px;
`;

const FooterContentContainer = styled.div`
  display: flex;
  width: 535px;
  flex-direction: column;
  align-items: center;
`;

const TheImgsContainer = styled.div`
  margin-top: 20px;
  width: 230px;
  display: flex;
  justify-content: space-between;
`;

const StyledPWithMedia = styled(StyledP)`
  @media (max-width: 550px) {
    font-size: 19px;
  }
`;

const StyledFooter = () => {
  return (
    <Sfooter>
      <FooterContentContainer>
        <StyledPWithMedia>
          Epost:{" "}
          <StyledLinkTlfAndEmail href="mailto:Johnny@Bakaas-CadConsult.no">
            Johnny@Bakaas-CadConsult.no
          </StyledLinkTlfAndEmail>
        </StyledPWithMedia>
        <StyledPWithMedia>
          Tlf:{" "}
          <StyledLinkTlfAndEmail href="tel:+4790732947">
            90732947
          </StyledLinkTlfAndEmail>
        </StyledPWithMedia>
        <TheImgsContainer>
          <StyledLink href="https://github.com/JohnnyBakaas/JohnnyBakaasPersonligSide">
            <StyledLogos src={GitHubLogo} alt="GitHubLogo" />
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/johnny-bakaas-1a7370250/">
            <StyledLogos src={LinkedInLogo} alt="LinkedInLogo" />
          </StyledLink>
        </TheImgsContainer>
      </FooterContentContainer>
    </Sfooter>
  );
};

export default StyledFooter;
