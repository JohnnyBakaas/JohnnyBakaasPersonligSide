import styled from "styled-components";
import StyledH2 from "../StyledH2";
import StyledP from "../StyledP";

const Bold = styled.span`
  font-weight: bold;
`;

const JohnnyBakaasPersonligNettside = () => {
  return (
    <>
      <StyledH2>Johnny Bakaas - Personlig nettside</StyledH2>

      <StyledP>
        <Bold>Hva er målet mitt med denne nettsiden?</Bold>
      </StyledP>
      <StyledP>
        1: Lære React. 2: Ha ett sted å vise ferdighetene og prosjektene mine.
        3: Ha noe å se tilbake på
      </StyledP>
      <StyledP>
        Så, lærte jeg React? Dette er ikke den første gang jeg har brukt React,
        men det er første gangen jeg har fokusert på å skrive bra kode, fram til
        dette prosjektet har jeg bare brukt React til å kaste sammen en frontend
        for Fullstack prosjektene mine. Så etter dett prosjektet vet jeg både
        hvordan useState og useEffect fungerer og hvorfor man faktisk skal bruke
        de. Har jeg en dyp forståelse for hvordan Hooks fungerer? Som det meste
        annet i livet er dette relativt, har jeg like dyp forståelse som
        mentorene mine? Nei, men det er svært liete jeg ikke forstår og jeg er
        mer en komfertabel med å skrive React.
      </StyledP>

      <StyledP>
        For å gjøre livet mitt litt lettere valgte jeg å bruker styled compnents
        og React Router for å ta seg av stylinga og routinga
      </StyledP>

      <StyledH2>Alt under her er komentarer</StyledH2>

      <StyledP>
        Hvordan starte en artikkel om nettsiden du jobber på? Vel, la oss starte
        med teknologien jeg har brukt
      </StyledP>
      <StyledP>
        Siden er skrivet i React med Vite som "build tool". For css bruker jeg
        Styled componets. For routing bruker jeg React Router. JavaScript for
        språk. Dette er faktsik en SPA. Problemer jeg har hatt er at Styled
        Components sin nyeste versjon på NPM ikke fungerer (11.05.2023).
      </StyledP>
      <StyledP>
        Problemer: Lære seg React, React Router og Styled components. Løsning:
        Banke hodet i veggen, spørre mentorene mine og spørre ChatGPT
      </StyledP>
    </>
  );
};

export default JohnnyBakaasPersonligNettside;
