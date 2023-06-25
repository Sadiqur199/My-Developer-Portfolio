import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-75">
      <Card.Img variant="top" style={{height:'50%', width:'full'}} src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="font-bold mb-3">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="mt-3" variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <div>
        <Button variant="primary" className="mt-5" href={props.liveLink} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Github"}
        </Button>
        </div>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
