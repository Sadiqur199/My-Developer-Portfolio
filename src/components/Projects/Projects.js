import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import img1 from '../../Assets/Chines-Food-Restaurant-Home.png'
import img2 from '../../Assets/ZET.png'
import img3 from '../../Assets/CarToys-Home.png'
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img3}
              isBlog={false}
              liveLink="https://toy-car-395e4.web.app/"
              title="Toy-Car"
              description="use the react router dom and other technology .. login system product add and delete system etc.."
              link="https://github.com/Sadiqur199/ToyCar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              liveLink="https://zet-web.netlify.app/"
              title="Zet Frontend Web"
              description=" use the react router dom and react rating other technology "
              link="https://github.com/Sadiqur199/Zet-frontend-web"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              liveLink="https://chines-food-restaurant.web.app/"
              title="Chines Food Restaurant"
              description="use a sever and client site.
              1.Login System 
              2.Add to Cart System
              3.Payment System
              4.Admin system & User dashboard
              5.https://chines-food-restaurant.web.app/
              "
              link="https://github.com/Sadiqur199/Chines-food-resturant-client"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              //isBlog={false}
              //title=""
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
