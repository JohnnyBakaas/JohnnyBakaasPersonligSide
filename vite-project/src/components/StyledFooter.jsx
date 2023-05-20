import styled from "styled-components";
import CTAButton from "./CTAButton";
import ContentContainer from "./ContentContainer";

const Sfooter = styled.footer`
  background-color: black;
  height: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledFooter = () => {
  return (
    <Sfooter>
      <ContentContainer></ContentContainer>
    </Sfooter>
  );
};

export default StyledFooter;
