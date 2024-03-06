import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Home from "./pages/Home";
import "./App.css";
import "./css/Home.css";
import "./css/Menu.css";
import "./css/TechnoAdd.css";
import "./css/TechnoList.css";
import Menu from "./components/Menu";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TEchnoList";
import Contact from "./pages/cv/Contact";
import CV from "./pages/cv/CV";
import Portfolio from "./pages/cv/Portfolio";
import Knowledges from "./pages/cv/Knowledges";
import NotFound from "./pages/NotFound";

function App() {
  const [technos, setTechnos] = useState([]);

  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  return (
    <>
      <Menu />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<TechnoAdd handleAddTechno={handleAddTechno} />}
        />
        <Route path="/list" element={<TechnoList technos={technos} />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/projet-react" element={<CV />} />
        <Route path="/cv/knowledges" element={<Knowledges technos={technos} />} />
        <Route path="/cv/portfolio" element={<Portfolio technos={technos} />} />
        <Route path="/cv/contact" element={<Contact technos={technos} />} />
      </Routes>
    </>
  );
}

export default App;
