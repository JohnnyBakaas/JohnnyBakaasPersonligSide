import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import StyledHeader from "./components/StyledHeader";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import StyledFooter from "./components/StyledFooter";
import TakeContact from "./components/TakeContact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Article from "./components/Article";

function App() {
  return (
    <Router>
      <StyledHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ferdigheter" element={<Skills />} />
        <Route path="/ta-kontakt" element={<TakeContact />} />
        <Route path="/portefolje" element={<Portfolio />} />
        <Route path="/portefolje/:articleId" element={<Article />} />
        <Route path="/om-meg" element={<AboutMe />} />
      </Routes>
      <StyledFooter />
    </Router>
  );
}

export default App;
