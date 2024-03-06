import React from "react";

const Hobbies = () => {
  return (
    <div className="Hobbies">
      <h3>Intérêt</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>cours de Javascript</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Jeu d'échec</span>
        </li>
        <li className="hobby">
          <i className="fas fa-seedling"></i>
          <span>Foot ball</span>
        </li>
        <li className="hobby">
          <i className="fab fa-bitcoin"></i>
          <span>Basket ball</span>
        </li>
        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span>Cours d'Anglais</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
