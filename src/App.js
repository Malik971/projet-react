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
import CvNavigation from "./components/CvNavigation";
import Knowledges from "./pages/cv/Knowledges";

function App() {
  const [technos, setTechnos] = useState([]);
  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function Contact() {
    return <h1>Contacter moi ici</h1>;
  }
  function Portfolio() {
    return <h1>Voici mon CV</h1>;
  }
  function Knowledges() {
    return <h1>Knowledges Page 3</h1>;
  }
  function NotFound() {
    return <h1>Page non trouvée</h1>;
  }
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/cv" element={<CvNavigation />} />

        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<TechnoAdd handleAddTechno={handleAddTechno} />}
        />
        <Route path="/list" element={<TechnoList technos={technos} />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/cv" element={<TechnoList technos={technos} />} />
        <Route path="/cv/Portfolio" element={<Portfolio technos={technos} />} />
        <Route path="/cv/contact" element={<Contact technos={technos} />} />
        <Route
          path="/cv/knowledges"
          element={<Knowledges technos={technos} />}
        />
      </Routes>
    </>
  );
}

export default App;
