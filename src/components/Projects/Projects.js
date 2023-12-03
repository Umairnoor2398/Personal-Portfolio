import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projectsList = [
  {
    imgPath: "https://softwaresquare.csuet.com/Images/Carousal/Image3.png",
    isBlog: false,
    title: "Software Square Website",
    description:
      "Build website of Official society of Department of Computer Science, UET Lahore in ASP.NET",
    ghLink: "https://github.com/Umairnoor2398",
    demoLink: "https://softwaresquare.csuet.com/",
  },
  {
    imgPath:
      "https://th.bing.com/th/id/OIP.oUhSWdV19-zUOwOxIG9mvAHaFP?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    isBlog: false,
    title: "SmartInventory Management System",
    description:
      "AI-driven inventory management system using ASP.NET Core MVC, integrating machine learning algorithms to predict stock levels and optimize replenishment strategies.",
    ghLink: "https://github.com/Umairnoor2398",
    demoLink: "https://github.com/Umairnoor2398",
  },
  {
    imgPath:
      "https://th.bing.com/th/id/OIP.JY2j_Y6EnVwn2dSsnvizkAHaD4?w=330&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    isBlog: false,
    title: "Customer Sentiment Analyzer",
    description:
      "Developed an AI-powered sentiment analysis tool using natural language processing (NLP) with ASP.NET Core and PyTorch, analyzing customer reviews to gauge sentiment.",
    ghLink: "https://github.com/Umairnoor2398",
    demoLink: "https://github.com/Umairnoor2398",
  },
  {
    imgPath:
      "https://th.bing.com/th/id/OIP.rjS6sMs6VQAAO2xM-RRYKgHaD4?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    isBlog: false,
    title: "AI-Driven Chatbot",
    description:
      "Built an intelligent chatbot using ASP.NET Core for backend processing and TensorFlow for natural language understanding, providing personalized assistance and support.",
    ghLink: "https://github.com/Umairnoor2398",
    demoLink: "https://github.com/Umairnoor2398",
  },
  // Add more projects in a similar manner
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsList.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
