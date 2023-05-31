import React from "react";
export default function TechnoList(props) {
  const { technos } = props;
  return (
    <div className="techno-list">
      <h1>Toutes les Technologies ajouter</h1>
      <div>
              {technos.map((techno, technoid) => (
              <div 
        key={techno.technoid}
        className={`techno-item ${
          technoid % 2 === 0 ? "techno-color-1" : "techno-color-2"
        }`}
      >
            <h2>{techno.technoname}</h2>
            <p>Mail n° :{technoid}</p>
            <h3>Categorie</h3>
            <p>{techno.technocategory}</p>
            <h3>Description</h3>
            <p>{techno.technodescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
