import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link as BaseLink } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerIcon from "../images/hamburger-menu.svg";
import XIcon from "../images/x-menu.svg";

const StyledNavbar = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  flex-direction: column-reverse;
`;

const StyledImg = styled(motion.img)`
  min-width: 120px;
  min-height: 120px;
  width: 12.5vw;
  float: right;
`;

const Link = React.forwardRef(({ to, href, children, className }, ref) =>
  to ? (
    <BaseLink ref={ref} to={to} children={children} className={className} />
  ) : (
    <a ref={ref} href={href} children={children} className={className} />
  )
);

const StyledLink = styled(motion.custom(Link))`
  margin-right: 10px;
  background-color: #0d1f2d;
  color: #f5fffa;
  min-width: 160px;
  width: 22.5vw;
  height: 10vh;
  border-radius: 25px;
  text-align: center;
  padding-top: 1.5vh;
  text-decoration: none;
`;

const AnimatedLink = props => (
  <StyledLink
    whileHover={{ scale: 1.1, backgroundColor: "#F5FFFA", color: "#0D1F2D" }}
    whileTap={{ scale: 0.9, backgroundColor: "#F5FFFA", color: "#0D1F2D" }}
    {...props}
  />
);

export default () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(prevShow => !prevShow);

  return (
    <StyledNavbar>
      {show && (
        <StyledNav>
          <AnimatedLink to="/">Home</AnimatedLink>
          <AnimatedLink to="/projects">Projects</AnimatedLink>
          <AnimatedLink href="https://github.com/bpas247">GitHub</AnimatedLink>
          <AnimatedLink href="https://www.linkedin.com/in/brady-pascoe-3bba6b13a/">
            LinkedIn
          </AnimatedLink>
        </StyledNav>
      )}
      {!show && (
        <AnimatePresence>
          <StyledImg
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={HamburgerIcon}
            onClick={handleShow}
          />
        </AnimatePresence>
      )}
      {show && (
        <AnimatePresence>
          <StyledImg
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={XIcon}
            onClick={handleShow}
          />
        </AnimatePresence>
      )}
    </StyledNavbar>
  );
};
