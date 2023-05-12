import { useState } from "react";
import "./App.css";
import StyledHeader from "./components/StyledHeader";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import StyledFooter from "./components/StyledFooter";
import TakeContact from "./components/TakeContact";
import Home from "./components/Home";

function App() {
  const [curentPage, setCurentPage] = useState("Hjem");

  let pageToDisplay;
  if (curentPage === "Hjem") pageToDisplay = <Home></Home>;
  if (curentPage === "Ferdigheter") pageToDisplay = <Skills />;
  if (curentPage === "Ta kontakt") pageToDisplay = <TakeContact />;
  if (curentPage === "Portefølje") pageToDisplay = <>Portefølje</>;
  if (curentPage === "Om meg") pageToDisplay = <AboutMe />;

  return (
    <>
      <StyledHeader setCurentPage={setCurentPage} curentPage={curentPage} />
      {pageToDisplay}
      <StyledFooter />
    </>
  );
}

export default App;
