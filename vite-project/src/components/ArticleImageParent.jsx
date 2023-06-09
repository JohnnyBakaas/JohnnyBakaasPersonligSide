import styled from "styled-components";

const ArticleImageParent = styled.div`
  margin-top: 20px;
  min-width: 500px;
  width: 500px;
  min-height: 100px;
  border-radius: 20px;
  background-color: rgb(209, 0, 0);
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  @media (max-width: 1300px) {
    width: 100%;
    height: 200px;
    min-width: 0;

    min-height: 0;
  }
`;

export default ArticleImageParent;
