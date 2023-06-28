import React from "react";
import CvNavigation from "../../components/CvNavigation";

const CV = () => {
  return (
    <div className="CV">
      <CvNavigation />
      <div className="CVcontent">
        <div className="content">
          <h2>C'est la page home du CV</h2>
          <h1>IBO Malik</h1>
          <h2>Developpeur Web</h2>
          <div className="pdf">
            <a href="./media/yo.JPG" target="cvMalik">
              mon cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
