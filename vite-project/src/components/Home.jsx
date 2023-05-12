import styled from "styled-components";
import ArticleImageParent from "./ArticleImageParent";
import CTAButton from "./CTAButton";
import ContentContainer from "./ContentContainer";
import StyledH2 from "./StyledH2";
import StyledP from "./StyledP";
import StyledFirstParagraph from "./StyledFirstParagraph";

const HomeImage = styled(ArticleImageParent)``;

const TakeContact = () => {
  return (
    <ContentContainer>
      <StyledH2>Velkommen!</StyledH2>
      <StyledFirstParagraph>
        <div>
          <StyledP>Jeg er Johnny Bakaas</StyledP>
          <StyledP>
            Jeg er en utvikler og teknisk tegner med en lidenskap for å bringe
            ideer til liv. Med en unik blanding av teknisk innsikt og
            kreativitet, hjelper jeg kunder med å realisere sine prosjekter, fra
            detaljerte tekniske tegninger til skreddersydde
            programvareløsninger. Er du klar til å ta ditt neste prosjekt til et
            høyere nivå? La oss begynne reisen sammen. Ta kontakt med meg i dag!
          </StyledP>
        </div>
        <HomeImage />
      </StyledFirstParagraph>
      <h1>Legg til CTA Button igjen og få den til å være ikke stygg</h1>
    </ContentContainer>
  );
};

export default TakeContact;
