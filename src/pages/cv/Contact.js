import React from "react";
import CvNavigation from "../../components/CvNavigation";
import CopyToClipboard from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
        <CvNavigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Montpellier</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0749506885">
                  <span className="clickInput" onClick={() => {alert("Numéro Copié !")}}>
                    07 49 50 68 85
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="malik97un@gmail.com">
                  <span className="clickInput" onClick={() => {alert("Email Copié!")}}>
                  malik97un@gmail.com
                  </span>
                </CopyToClipboard>
              </li>
            </ul>
        
        </div>
        <div className="socialNetwork">
          <ul>
          <a
              href="https://github.com/Malik971"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://twitter.com/Mikey_valkyrie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01d6ef37bd3e816b96?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
        
            <a
              href="https://www.linkedin.com/in/malik-ibo-086693261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
