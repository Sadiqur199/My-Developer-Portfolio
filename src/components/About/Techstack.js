import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiBootstrap,
    DiPython,
    DiDjango, DiJava, DiRasberryPi, DiMongodb
} from "react-icons/di";
import { FaCss3Alt, FaElementor, FaHtml5 } from "react-icons/fa";
import {SiAmericanexpress, SiJupyter, SiReactrouter, SiTailwindcss} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiReactrouter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiTailwindcss />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <FaElementor />
        </Col>
    </Row>
  );
}

export default Techstack;
