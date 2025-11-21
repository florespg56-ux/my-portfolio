import React from "react";
import bgImage from "../assets/my-background.jpg"; // same background image

const Contact = () => (
  <section id="contact" style={styles.container}>
    <h2 style={styles.heading}>Contact Me</h2>
    <p style={styles.text}>Email: florespg56@gmail.com</p>
    <p style={styles.text}>
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/angelo-peter-flores-ba9032384/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        linkedin.com/in/angelo-peter-flores-ba9032384/
      </a>
    </p>
    <p style={styles.text}>Phone: +63 9512921567</p>
  </section>
);

const styles = {
  container: {
    padding: "100px 20px",
    textAlign: "center",
    minHeight: "100vh",
    color: "white",
    // background image with overlay
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  heading: {
    fontSize: "42px",
    marginBottom: "30px",
  },
  text: {
    fontSize: "22px",
    margin: "10px 0",
  },
  link: {
    color: "#00eaff",
    textDecoration: "none",
  },
};

export default Contact;
