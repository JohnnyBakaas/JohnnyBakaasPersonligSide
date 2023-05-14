import styled from "styled-components";
import ContentContainer from "./ContentContainer";
import StyledFirstParagraph from "./StyledFirstParagraph";
import StyledH2 from "./StyledH2";
import StyledP from "./StyledP";
import { Link } from "react-router-dom";

const StyledArticleContainerLink = styled(Link)`
  padding-bottom: 100px;
`;

const Portfolio = () => {
  return (
    <ContentContainer>
      <StyledArticleContainerLink to={`/portefolje/0`}>
        <StyledH2>Johnny Bakaas - Personlig nettside</StyledH2>
        <StyledFirstParagraph>
          <div>
            <StyledP>Hva er målet mitt med denne nettsiden?</StyledP>
            <StyledP>
              1: Lære React. 2: Ha ett sted å vise ferdighetene og prosjektene
              mine. 3: Ha noe å se tilbake på
            </StyledP>
            <StyledP>
              Så, lærte jeg React? Dette er ikke den første gang jeg har brukt
              React, men det er første gangen jeg har fokusert på å skrive bra
              kode, fram til dette prosjektet har jeg bare brukt React til å
              kaste sammen en frontend for Fullstack prosjektene mine. Så nå vet
              jeg både hvordan useState og useEffect fungerer og hvorfor man
              skal bruke de. Har jeg en dyp forståelse for hvordan Hooks
              fungerer? Som det meste annet i livet er dette relativt, har jeg
              like dyp forståelse som mentorene mine? Nei, men det er svært
              liete jeg ikke forstår lenger
            </StyledP>
          </div>
          <div>
            bilde her med logoene til react, vite, js, styled components, npm og
            chatgpt
          </div>
        </StyledFirstParagraph>
      </StyledArticleContainerLink>
    </ContentContainer>
  );
};

export default Portfolio;
