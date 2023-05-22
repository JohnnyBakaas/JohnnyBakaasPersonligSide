import styled from "styled-components";
import ArticleImageParent from "./ArticleImageParent";
import ContentContainer from "./ContentContainer";
import StyledH2 from "./StyledH2";
import StyledP from "./StyledP";
import StyledFirstParagraph from "./StyledFirstParagraph";
import BildeAvMeg from "./images/BildeAvMeg.jpg";

const HomeImage = styled(ArticleImageParent)`
  background-image: url(${BildeAvMeg});
`;

const AboutMe = () => {
  return (
    <ContentContainer>
      <StyledH2>Om meg</StyledH2>
      <StyledFirstParagraph>
        <StyledP>
          Med en variert bakgrunn som inkluderer utdanning innen elektro og
          automatikk, samt erfaring som utvikler og teknisk tegner, bringer jeg
          en unik blanding av ferdigheter til bordet. Fra unge år har jeg vært
          fascinert av det tekniske - en lidenskap som ledet meg til en karriere
          innen teknisk tegning. Jeg har over 7 års erfaring med bruk av Autocad
          for 2D og 3D-modellering, og har arbeidet med alt fra konstruksjon hos
          Systemblokk, til drift av plantegninger og fagtegninger hos Bakaas
          Cadconsult AS. Men det er ikke alt. Jeg er også en dyktig utvikler,
          noe som har blitt en lidenskap på lik linje med teknisk tegning.
        </StyledP>

        <HomeImage />
      </StyledFirstParagraph>

      <StyledP>
        Når jeg ikke jobber, finner du meg ofte dypt inn i programmering - det
        er en hobby som også beriker mitt profesjonelle liv. Jeg liker også å
        holde meg aktiv, og finner avslapping i tegning og 3D-modellering, noe
        som hjelper meg å holde kreativiteten i live. Jeg trives med å lære og
        utfordre meg selv, og jeg ser alltid etter måter å bringe innovasjon og
        kreativitet til prosjektene jeg jobber med. Jeg tror på samarbeid og ser
        frem til å være en verdifull bidragsyter i ditt neste prosjekt.
      </StyledP>
    </ContentContainer>
  );
};

export default AboutMe;
