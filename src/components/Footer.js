import "./styles/App.css";
import React from "react";
import { Navbar } from "react-bootstrap";
import { ReactComponent as YouTubeLogo } from "../img/youtube.svg";
import { ReactComponent as VKLogo } from "../img/vk.svg";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="App-footer">
      <div className="container">
        <div className="row justify-content-center mb-2">
            <ul className="nav col justify-content-center">
                <li className="nav-item px-sm-4 pe-1">
                <YouTubeLogo className="Social-logo" />
                </li>
                <li className="nav-item px-sm-4 pe-1">
                <VKLogo className="Social-logo" />
                </li>
            </ul>
            <span>&copy; Python ML project, {year}</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;