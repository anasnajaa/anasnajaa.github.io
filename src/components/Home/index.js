import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

const Home = () => {
  return (
    <div className="HomeComponent">
      <Row>
        <Col xs={12} sm={12} md={12} lg={3} xl={3} />
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <Jumbotron className="text-center">
            <h1>Hi, I'm Anas Najaa.</h1>
            <p>
              I'm a software developer based in Kuwait.
              <br />
              I'm currently interested in building simple to use APIs and SPAs.
              <br />
              <i>Learn by doing, keep learning.</i>
            </p>
          </Jumbotron>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3} xl={3} />
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <div>
            <h2 className="mb-3">I'm avilable here</h2>
            <a
              className="mr-5 twitter"
              href="https://twitter.com/spidernet12"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="mr-5 linkedin"
              href="https://www.linkedin.com/in/anasnajaa"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="github"
              href="https://github.com/anasnajaa"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </Col>
      </Row>
      <footer>
        This Website is hosted on&nbsp;
        <a
          href="https://pages.github.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Github Pages
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.heroku.com/dynos"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Heroku
        </a>
        <br />
        The frontend is powered by React.js (
        <a
          href="https://github.com/anasnajaa/anasnajaa.github.io"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          source code
        </a>
        )<br />
        API is powered by Node.js/MongoDB/Express/Postgres (
        <a
          href="https://github.com/KumarAbhirup/personal-website"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          source code
        </a>
        )<br />
        Content is powered by&nbsp;
        <a
          href="https://ghost.org/docs/api/v3/content/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Ghost
        </a>
        &nbsp;acting as a headless CMS
      </footer>
    </div>
  );
};

export default Home;
