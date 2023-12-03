import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">M. Umair Noor Ahmad </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently employed as a software developer at Microsoft.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at UET
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In code, every line is a lesson, and every bug is a teacher."{" "}
          </p>
          <footer className="blockquote-footer">M. Umair</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
