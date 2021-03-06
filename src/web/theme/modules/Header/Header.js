import React from "react";
import Navigation from "./Navigation";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
