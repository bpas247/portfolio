import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faScroll } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const StyledNav = props => <div {...props} />;

const StyledLink = props => <Link {...props} />;

export default () => (
  <StyledNav>
    <StyledLink to="/">
      <FontAwesomeIcon size="lg" icon={faGithub} />
      <br />
      Home
    </StyledLink>
    <StyledLink to="/projects">
      <FontAwesomeIcon size="lg" icon={faTools} />
      <br />
      Projects
    </StyledLink>
    <StyledLink to="/resume">
      <FontAwesomeIcon size="lg" icon={faScroll} />
      <br />
      Resume
    </StyledLink>
  </StyledNav>
);
