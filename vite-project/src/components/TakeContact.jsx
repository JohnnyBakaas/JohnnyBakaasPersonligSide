import ContentContainer from "./ContentContainer";
import StyledH2 from "./StyledH2";
import StyledP from "./StyledP";

const Home = () => {
  return (
    <ContentContainer>
      <StyledH2>Ta kontakt!</StyledH2>
      <StyledP>
        La oss skape noe fantastisk sammen! Ta kontakt med meg i dag, så snakker
        vi mer om hvordan jeg kan hjelpe deg med ditt neste prosjekt.
      </StyledP>
      <StyledP>Epost: Johnny@bakaas-cadconsult.no</StyledP>
      <StyledP>Tlf.: 90732947</StyledP>
    </ContentContainer>
  );
};

export default Home;
