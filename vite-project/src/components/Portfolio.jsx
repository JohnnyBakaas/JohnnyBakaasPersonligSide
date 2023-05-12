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
            <StyledP>Kake tekst</StyledP>
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
