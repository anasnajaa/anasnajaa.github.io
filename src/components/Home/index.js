import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <Jumbotron>
        <h1>Hi, I'm Anas Najaa.</h1>
        <p>
            I'm a software developer based in Kuwait.<br/>
            I'm currently interested in building simple to use APIs and SPAs.<br/>
            <br/>
            <a style={{textDecoration: "none", color:"#1DA1F2"}} className="h4" href="https://twitter.com/spidernet12">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <span>&nbsp;&nbsp;</span>
            <a style={{textDecoration: "none", color:"#2867B2"}} className="h4" href="https://www.linkedin.com/in/anasnajaa">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <span>&nbsp;&nbsp;</span>
            <a style={{textDecoration: "none", color:"#24292e"}} className="h4" href="https://github.com/anasnajaa">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <span>&nbsp;&nbsp;</span>
            <a style={{textDecoration: "none", color:"#D44638"}} className="h4" href="mailto:anas.najaa@outlook.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </p>
        
        </Jumbotron>
    )
};

export default Home;