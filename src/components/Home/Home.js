import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homelogo from '../../Assets/portfolio-removebg-preview.png'
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/Web Developer Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BBtn from "../BBtn";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Md : Sadiqur Rahman</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homelogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
