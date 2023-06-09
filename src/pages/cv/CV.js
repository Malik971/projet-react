import React from "react";
import CvNavigation from "../../components/CvNavigation";

const CV = () => {
  return (
    <div className="CV">
      <CvNavigation />
      <div className="CVcontent">
        <div className="content">
          <h1>IBO Malik</h1>
          <h2>C'est la page home du CV</h2>
          <div className="pdf">
            <a href="./media/imgTest.jpg" target="cvMalik">
              mon cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
