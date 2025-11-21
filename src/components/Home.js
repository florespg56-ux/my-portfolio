import React from "react";
import { ReactTyped } from "react-typed"; // keep your existing import
import bgImage from "../assets/my-background.jpg";
import profilePic from "../assets/profile-pic.jpg"; // place your profile pic in the assets folder

const Home = () => {
  const today = new Date().toLocaleDateString();

  // Scroll to Projects section
  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" style={styles.container}>
      <h1 style={styles.title}>Hi, I’m Peter Angelo G. Flores</h1>

      <ReactTyped
        strings={["Web Developer", "Designer", "Programmer", "Creative Thinker", "Sleepyhead", "Imaginator", "NGSB Student"]}
        typeSpeed={60}
        backSpeed={40}
        loop
        style={styles.typing}
      />

      {/* Profile section */}
      <div style={styles.profileContainer}>
        <img src={profilePic} alt="Peter Angelo G. Flores" style={styles.profilePic} />
        <h2 style={styles.profileName}>Peter Angelo G. Flores</h2>
        <p style={styles.profileSchool}>Studied at: University of Cabuyao (UC)</p>
      </div>

      <p style={styles.date}>Today’s Date: {today}</p>
      <button style={styles.button} onClick={handleViewProjects}>
        View My Projects
      </button>
    </section>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "100px 20px",
    minHeight: "100vh",
    color: "white",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  title: { fontSize: "48px", marginBottom: "20px" },
  typing: { fontSize: "28px", color: "#00eaff" },
  profileContainer: { marginTop: "40px", textAlign: "center" },
  profilePic: { 
    width: "150px", 
    height: "150px", 
    borderRadius: "50%", 
    border: "4px solid #00eaff", 
    objectFit: "cover",
    marginBottom: "15px" 
  },
  profileName: { fontSize: "24px", marginBottom: "5px", color: "#00eaff" },
  profileSchool: { 
    fontSize: "20px", 
    color: "#00eaff", 
    fontWeight: "600",
    marginTop: "5px",
    transition: "0.3s",
    cursor: "default",
    // Glow on hover
    ':hover': {
      textShadow: "0 0 8px #00eaff, 0 0 16px #00eaff"
    }
  },
  date: { marginTop: "25px", fontSize: "18px", color: "#bbbbbb" },
  button: {
    marginTop: "30px",
    padding: "12px 24px",
    background: "#00eaff",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    color: "#000",
  },
};

export default Home;
