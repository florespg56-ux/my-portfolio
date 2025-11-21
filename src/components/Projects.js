import React, { useEffect } from "react";
import bgImage from "../assets/my-background.jpg";

const projectsData = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/300x200",
    description: "A cool web app built with React.",
    link: "", // empty means no project yet
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/300x200",
    description: "A creative design project using Figma.",
    link: "https://www.figma.com/proto/WHRLgefbSRIlFIkHLtO9ll?node-id=0-1&t=TXNg79k4a8HS6wpI-6",
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/300x200",
    description: "A responsive website built with HTML/CSS/JS.",
    link: "", // empty means no project yet
  },
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll("section#projects .card");
    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 10px 25px rgba(0,255,255,0.5)";
      });
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
      });
    });
  }, []);

  // Function to handle clicks on projects
  const handleProjectClick = (link) => {
    if (!link) {
      alert("This project is not available yet.");
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.grid}>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="card"
            style={styles.card}
            onClick={() => handleProjectClick(project.link)}
          >
            <img src={project.image} alt={project.title} style={styles.cardImage} />
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "100px 20px",
    minHeight: "100vh",
    textAlign: "center",
    color: "white",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  heading: {
    fontSize: "48px",
    marginBottom: "50px",
  },
  grid: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    background: "#222",
    borderRadius: "10px",
    padding: "20px",
    minWidth: "250px",
    maxWidth: "300px",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  cardImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "16px",
    color: "#ccc",
  },
};

export default Projects;
