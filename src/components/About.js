import React from "react";
import bgImage from "../assets/my-background.jpg";
import profilePic from "../assets/profile-pic.jpg"; // add your profile picture in assets

const About = () => (
  <section id="about" style={styles.container}>
    <h2 style={styles.heading}>About Me</h2>
    <div style={styles.content}>
      {/* Left: Profile Picture */}
      <div style={styles.imageWrapper}>
        <img src={profilePic} alt="Peter" style={styles.image} />
      </div>

      {/* Right: About Text */}
      <div style={styles.text}>
        <p>
          Hi! I’m Peter, a passionate web developer who loves building creative and functional projects.
          I enjoy turning ideas into real applications and constantly learning new technologies.
        </p>
        <p>
          I specialize in: <strong>React, JavaScript, HTML, CSS</strong> and I love exploring UI/UX design.
        </p>

        {/* Skills */}
        <div style={styles.skills}>
          <div style={styles.skill}>
            <span>React</span>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "50%" }}></div>
            </div>
          </div>
          <div style={styles.skill}>
            <span>JavaScript</span>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "20%" }}></div>
            </div>
          </div>
          <div style={styles.skill}>
            <span>CSS/HTML</span>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "10%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const styles = {
  container: {
    padding: "100px 20px",
    minHeight: "100vh",
    color: "white",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  heading: {
    fontSize: "48px",
    textAlign: "center",
    marginBottom: "50px",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  imageWrapper: {
    flex: "1 1 250px",
    textAlign: "center",
  },
  image: {
    width: "250px",
    borderRadius: "50%",
    border: "5px solid #00eaff",
  },
  text: {
    flex: "2 1 400px",
    textAlign: "left",
  },
  skills: {
    marginTop: "20px",
  },
  skill: {
    marginBottom: "15px",
  },
  progressBar: {
    width: "100%",
    height: "12px",
    background: "#333",
    borderRadius: "8px",
    marginTop: "5px",
  },
  progress: {
    height: "100%",
    background: "#00eaff",
    borderRadius: "8px",
  },
};

export default About;
