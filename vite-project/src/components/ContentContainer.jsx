import styled from "styled-components";
import WidthContainer from "./WidthContainer";

const StyledContentContainer = styled.div`
  padding: 10px;
  padding-bottom: 100px;
`;

const ContentContainer = ({ children }) => {
  return (
    <WidthContainer>
      <StyledContentContainer>{children}</StyledContentContainer>
    </WidthContainer>
  );
};

export default ContentContainer;
