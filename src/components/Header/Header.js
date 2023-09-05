import React from "react";
import StylesHeader from "./Header.module.css";

const Header = () => {
  return (
    <header className={StylesHeader.header}>
      <h1 className={StylesHeader.title}>TodoList</h1>
    </header>
  );
};

export default Header;
