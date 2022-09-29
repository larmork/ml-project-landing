import "./styles/App.css";
import { Navbar } from "react-bootstrap";
import React from "react";
import logo from '../img/logo.svg';

function Header() {
  return (
    <header className="App-header">
      <Navbar>
        <div className="container">
          <Navbar.Brand className="text-center">
            <img
              src={logo}
              className="App-logo-header"
            />
          </Navbar.Brand>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
