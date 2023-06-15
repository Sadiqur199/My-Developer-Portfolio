import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">MD : Sadiqur Rahman </span>
            from <span className="purple"> Dhaka , Bangladesh.</span>
            <br />I'm a 4th-year student, pursuing a <a href="https://www6.austincc.edu/cms/site/www/catalog/programmaps/programmap.php?ap=7049&yr=2022">Bachelors degree in Computer Science at BUBT</a>.
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Web developers possess the ability to automate or partially automate a wide range of repetitive and mundane Website  tasks by utilizing the appropriate code."{" "}
          </p>
          <footer className="blockquote-footer">Sadiqur Rahman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
