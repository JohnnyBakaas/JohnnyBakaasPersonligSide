import styled from "styled-components";

const StyledCTAButton = styled.button`
  background-color: #d10000;
  font-size: 30px;
  padding: 30px;
  border-radius: 60px;
`;
const CTAButton = () => {
  return <StyledCTAButton>La oss skape noe fantastisk sammen!</StyledCTAButton>;
};

export default CTAButton;
