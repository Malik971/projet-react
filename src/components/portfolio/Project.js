import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languageIcons, source, info, picture } = this.props.item;

    // Vérifier si languageIcons est défini et est un tableau
    const hasLanguageIcons = Array.isArray(languageIcons) && languageIcons.length > 0;

    return (
      <div className="project">
        <div className="icons">
          {hasLanguageIcons && languageIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a href={source} className="button" target="_blank" rel="noopener noreferrer">code source</a>
                </div>
              </div>

              <p className="text">{info}</p>

              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
