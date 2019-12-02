/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link as FunctionLink } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faScroll } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Flex, NavLink } from "@theme-ui/components";

const StyledNav = props => <Flex {...props} />;

const StyledLink = props => (
  <NavLink {...props} sx={{ px: 2, color: "text" }} as={FunctionLink} />
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
