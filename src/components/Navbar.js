import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faScroll } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  padding-right: 25px;
`;

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
