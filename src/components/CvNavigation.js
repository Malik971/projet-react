import { NavLink } from "react-router-dom";
import React from "react";

const CvNavigation = () => {
  return (
    <div className="cvsidebar">
      <div className="cvid">
        <div className="cvidContent">
          <img src="./IBO.PNG" alt="profil-ibo" />
          <h3>IBO Malik</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/cv">
              <i className="fas fa-home"></i>
              <span>CV</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv/portfolio">
              <i className="fas fa-image"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv/knowledges" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://github.com/Malik971"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Mikey_valkyrie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~01d6ef37bd3e816b96?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/malik-ibo-086693261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Malik IBO</p>
        </div>
      </div>
    </div>
  );
};

export default CvNavigation;
