import React from "react";

const Navbar = () => (
  <nav style={styles.nav}>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
);

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    background: "#111",
    color: "#fff",
    position: "sticky",
    top: 0
  }
};

export default Navbar;
