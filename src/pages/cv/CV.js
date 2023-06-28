import React from "react";
import CvNavigation from "../../components/CvNavigation";

const CV = () => {
  return (
    <div className="CV">
      <CvNavigation />
      <div className="CVcontent">
        <div className="content">
          <h4>Hello, I'm</h4>
          <h1>IBO Malik</h1>
          <h2>Développeur Web</h2>
          <div className="pdf">
            <a href="./media/CV_IBO_Malik_Front-end.pdf" target="_blank" rel="noopener noreferrer">
              Mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
