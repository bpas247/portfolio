import React from "react";
import styled from "@emotion/styled";
import { Link as BaseLink } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faHome, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
`;

const Link = ({ to, ...props }) =>
  to ? <BaseLink to={to} {...props} /> : <a {...props} />;

const StyledLink = styled(Link)`
  margin-right: 10px;
  color: #0496ff;
`;

export default () => (
  <StyledNav>
    <StyledLink to="/">
      <FontAwesomeIcon size="lg" icon={faHome} />
      Home
    </StyledLink>
    <StyledLink to="/projects">
      <FontAwesomeIcon size="lg" icon={faTools} />
      Projects
    </StyledLink>
    <StyledLink href="https://github.com/bpas247">
      <FontAwesomeIcon size="lg" icon={faGithub} />
      GitHub
    </StyledLink>
    <StyledLink href="https://www.linkedin.com/in/brady-pascoe-3bba6b13a/">
      <FontAwesomeIcon size="lg" icon={faLinkedin} />
      LinkedIn
    </StyledLink>
  </StyledNav>
);
