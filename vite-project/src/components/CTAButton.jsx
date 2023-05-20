import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCTAButton = styled(Link)`
  all: unset;
  cursor: pointer;
  background-color: #d10000;
  font-size: 30px;
  padding: 30px;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  border: 0;
`;
const CTAButton = () => {
  return (
    <StyledCTAButton to="/ta-kontakt">
      La oss skape noe fantastisk sammen!
    </StyledCTAButton>
  );
};

export default CTAButton;
