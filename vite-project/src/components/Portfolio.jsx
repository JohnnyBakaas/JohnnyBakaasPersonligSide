import styled from "styled-components";
import ContentContainer from "./ContentContainer";
import StyledFirstParagraph from "./StyledFirstParagraph";
import StyledH2 from "./StyledH2";
import StyledP from "./StyledP";
import { Link } from "react-router-dom";
import ArticleImageParent from "./ArticleImageParent";
import myFirstArticleImgae from "./portfolioContent/img/myFirstArticleImgae.jpg";

const StyledArticleContainerLink = styled(Link)`
  all: unset;
  cursor: pointer;
  margin-bottom: 100px;
`;

const MyFirstArticleImgae = styled(ArticleImageParent)`
  background-image: url(${myFirstArticleImgae});
  min-height: 330px;
`;

const Portfolio = () => {
  return (
    <ContentContainer>
      <StyledArticleContainerLink to={`/portefolje/0`}>
        <StyledH2>Johnny Bakaas - Personlig nettside</StyledH2>
        <StyledFirstParagraph>
          <div>
            <StyledP>Min første artikkel!</StyledP>
            <StyledP>
              Min første artikkel!rrrrr rrrrrrrr rr rrr rrrrrr
              rrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrr rrrrr rrrrrrr rrrrrrrrrrrrrrr
              rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrr rrrrrr rrrrrr rrrrrrrrrr
              rrrrrrrrr rrrrrrrr
            </StyledP>
            <StyledP>
              Min første artikkel!rrrrr rrrrrrrr rr rrr rrrrrr
              rrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrr rrrrr rrrrrrr rrrrrrrrrrrrrrr
              rrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrr rrrrrr rrrrrr rrrrrrrrrr
              rrrrrrrr rrrrrrrrr
            </StyledP>
          </div>
          <MyFirstArticleImgae />
        </StyledFirstParagraph>
      </StyledArticleContainerLink>
    </ContentContainer>
  );
};

export default Portfolio;
