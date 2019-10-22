import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default () => (
  <nav>
    <Link to="/">
      <FontAwesomeIcon icon={faGithub} />
      Home
    </Link>
    <Link to="/projects">Projects</Link>
    <Link to="/resume">Resume</Link>
  </nav>
);
