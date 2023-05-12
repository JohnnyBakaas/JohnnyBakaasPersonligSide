import styled from "styled-components";
import ArticleImageParent from "./ArticleImageParent";
import programingImg from "./images/programingImage.jpg";
import autocadImg from "./images/autocadImage.jpg";
import StyledFirstParagraph from "./StyledFirstParagraph";
import StyledP from "./StyledP";
import ContentContainer from "./ContentContainer";
import StyledH2 from "./StyledH2";
import ProgramingLogos from "./ProgramingLogos";
import DrawingLogos from "./DrawingLogos";

const ProgramingImage = styled(ArticleImageParent)`
  background-image: url(${programingImg});
`;

const AutocadImage = styled(ArticleImageParent)`
  background-image: url(${autocadImg});
`;

const StyledRightP = styled(StyledP)`
  text-align: right;
`;

const StyldedRightH2 = styled(StyledH2)`
  text-align: right;
`;

const StyledSkillsContainer = styled.div`
  padding-bottom: 100px;
`;

const Skills = () => {
  return (
    <ContentContainer>
      <StyledSkillsContainer>
        <StyledH2>Utvikling</StyledH2>
        <StyledFirstParagraph>
          <div>
            <StyledP>
              Som utvikler har jeg bred og variert erfaring som jeg kan tilby
              deg. Enten du trenger en engasjerende landingsside, effektive
              interne verktøy eller spesialisert programvare for
              mikrokontrollere, er jeg godt rustet til å hjelpe. Min interesse
              for alle aspekter av utviklingsprosessen og evnen til å tilpasse
              meg nye utfordringer gjør meg til en pålitelig partner for dine
              tekniske behov.
            </StyledP>
            <ProgramingLogos />
          </div>
          <ProgramingImage />
        </StyledFirstParagraph>
      </StyledSkillsContainer>

      <div>
        <StyldedRightH2>Teknisk Tegning</StyldedRightH2>
        <StyledFirstParagraph>
          <AutocadImage />
          <div>
            <StyledRightP>
              Som teknisk tegner, transformerer jeg ideer til detaljerte
              tegninger, nøyaktige modeller og overbevisende visualiseringer.
              Enten det er et banebrytende konsept for en elektrisk sykkel, en
              presis brakett eller et komplekst IoT-kabinett, er jeg forpliktet
              til å støtte deg i hvert trinn. Jeg kombinerer teknisk dyktighet
              med kreativ tenkning for å levere resultater som overgår
              forventningene dine.
            </StyledRightP>

            <DrawingLogos />
          </div>
        </StyledFirstParagraph>
      </div>
    </ContentContainer>
  );
};

export default Skills;
