import React from "react";
import { Link as FunctionLink } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faScroll } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Flex, Link } from "rebass";

const StyledNav = props => (
  <Flex {...props} px={2} sx={{ display: "flex", justifyContent: "center" }} />
);

const StyledLink = props => (
  <Link {...props} color="text" as={FunctionLink} variant="nav" />
);

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
