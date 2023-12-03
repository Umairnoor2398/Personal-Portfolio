import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { DiJavascript1, DiGit } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons-text">
        <h2>
          <b>ASP.NET CORE MVC</b>
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons-text">
        <h2>
          <b>C#</b>
        </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
