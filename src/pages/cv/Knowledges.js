import React from "react";
import CvNavigation from "../../components/CvNavigation";
import Langages from "../../components/knowledges/Languages";
import Experience from "../../components/knowledges/Experience";
import OtherSkills from "../../components/knowledges/OtherSkills";
import Hobbies from "../../components/knowledges/Hobbies";
const Knowledges = () => {
  return (
    <div className="knowledges">
      <CvNavigation />
      <div className="knowledgesContent">
        <Langages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
