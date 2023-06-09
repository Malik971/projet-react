import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 2, value: "Css/Html", xp: 2 },
      { id: 3, value: "PHP", xp: 1 },
      { id: 1, value: "Javascript", xp: 1.8 },
      { id: 5, value: "Python", xp: 0.5 },
      { id: 6, value: "C++", xp: 1.4 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.6 },
      { id: 2, value: "Node.js", xp: 1.2 },
      { id: 4, value: "Wordpress", xp: 2 },
      { id: 3, value: "Sass", xp: 0.7 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    )
  }
}

export default Languages;
