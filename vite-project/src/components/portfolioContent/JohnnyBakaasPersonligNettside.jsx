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
        Mine mål er trefoldige: 1 Lære React. 2 Ha et sted for å demonstrere
        mine ferdigheter og prosjekter. 3 Lage noe jeg kan se tilbake på.
      </StyledP>

      <StyledP>
        Denne nettsiden er skrevet i React med Vite som byggeverktøy. Jeg har
        benyttet Styled Components for CSS, og React Router for ruting. Dette
        gjør det mulig å dele lenker til spesifikke artikler, noe som er nyttig
        når man arbeider med en enkeltstående applikasjon (SPA).
      </StyledP>

      <StyledP>
        Lærte jeg React gjennom dette prosjektet? Dette er ikke første gang jeg
        har brukt React, men det er første gang jeg har konsentrert meg om å
        skrive god kode. Fra tidligere har jeg benyttet React for å kaste sammen
        en frontend for mine fullstack-prosjekter. Gjennom dette prosjektet har
        jeg fått dypere forståelse for React, og jeg føler meg nå komfortabel
        med å skrive React-kode.
      </StyledP>

      <StyledP>
        Jeg støtte på noen problemer da jeg skulle implementere Styled
        Components. Det viste seg at den nyeste versjonen på NPM hadde feil.
        Etter å ha forsøkt å installere flere ganger, valgte jeg til slutt å
        installere en tidligere versjon (npm install styled-components@5.3.8).
        Da jeg løste dette problemet, hjalp jeg også andre som slet med det
        samme på Discord-serveren deres.
      </StyledP>

      <StyledP>
        Til tross for noen hindringer, ble alle problemer løst ved hjelp av en
        kombinasjon av å banke hodet i veggen, veiledning fra min mentor, og
        bruk av ChatGPT. Jeg fant ut at ChatGPT er et utrolig nyttig verktøy for
        å generere "boilerplate"-kode, forklare hvordan ting fungerer, og komme
        med forslag. Likevel, som alle verktøy, har det sine begrensninger. For
        eksempel prøvde jeg å få ChatGPT til å konvertere headeren min fra
        "useState" til "Link". Det endte med å ødelegge både stil og
        funksjonalitet. Derfor er min konklusjon at så lenge man vet hva man
        gjør og bruker verktøyet riktig, kan det øke produktiviteten
        betraktelig.
      </StyledP>

      <StyledP>
        Kan henne du allerede har lagt merke til det, men hele denne artikkelen
        er skrevet av Chat GPT, jeg snakker Bø-hæring og har dysleks så å bare
        kunne brain dumpe med så mange skrive feil som fysisk mulig og dårlig
        struktur er ekstremt nyttig, selvsagt har jeg endret på noen ord og
        setininger, men ellers er det bare Chat GPT.
      </StyledP>
    </>
  );
};

export default JohnnyBakaasPersonligNettside;
