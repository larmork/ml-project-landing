import "./styles/App.css";
import React from "react";
import { ReactComponent as GitHubLogo } from "../img/github-logo.svg";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="App-footer">
      <div className="container">
        <div className="row justify-content-center mb-2">
            <ul className="Social-logo-line">
                <GitHubLogo className="Social-logo"/>
            </ul>
            <span>&copy; Python ML project, {year}</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;