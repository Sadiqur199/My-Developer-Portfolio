import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage from '../../Assets/portfolioimage.png'
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
            i am web developer is skilled professional me specializes in designing, building, and maintaining websites.
              <br />
              <br />I am experienced in programming languages including
              <i>
                <b className="purple"> HTML, CSS, Css FrameWork, JavaScript, React, React Route, React Query</b>
              </i>
              , and SQL dialects including
              <i>
                <b className="purple"> Mongo DB</b>.
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">...placeholder </b> and
                also in areas related to{" "}
                <b className="purple">
                  ....placeholder
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> update  Web Developer Tools and Component </b>
              </i>
              &nbsp; like
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImage}  className="img-fluid mt-5 rounded" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sadiqur199"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sadiqur-rahman-3255b11a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
