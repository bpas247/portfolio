import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link as BaseLink } from "gatsby";
import { motion } from "framer-motion";
import ArrowCircle from "../images/arrow-circle-left.svg";

const StyledNavbar = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const StyledNav = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  flex-direction: column-reverse;
`;

const navVariants = {
  open: { opacity: 1 },
  close: { opacity: 0 }
};

const AnimatedNav = ({ show, ...props }) => (
  <StyledNav
    {...props}
    initial="close"
    animate={show ? "open" : "close"}
    variants={navVariants}
  />
);

const StyledImg = styled(motion.img)`
  min-width: 60px;
  min-height: 60px;
  width: 10vw;
  height: 10vh;
  float: right;
  cursor: pointer;
  filter: invert(14%) sepia(86%) saturate(6723%) hue-rotate(324deg)
    brightness(103%) contrast(109%);
`;

const imgVariants = {
  open: { scaleX: -1 },
  close: { scaleX: 1 }
};

const AnimatedImg = ({ show, ...props }) => (
  <StyledImg
    {...props}
    animate={show ? "open" : "close"}
    variants={imgVariants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.7 }}
  />
);

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
  color: #f5f5f5;
  min-width: 160px;
  width: 22.5vw;
  height: 10vh;
  border-radius: 25px;
  text-align: center;
  padding-top: 1.5vh;
  text-decoration: none;
`;

const linkVariants = {
  open: { translateX: 0 },
  close: { translateX: 150 }
};

const AnimatedLink = ({ show, index, ...props }) => {
  return (
    <StyledLink
      animate={show ? "open" : "close"}
      variants={linkVariants}
      transition={{ duration: 0.3 + index * 0.08 }}
      whileHover={{ scale: 1.1, backgroundColor: "#F5F5F5", color: "#0D1F2D" }}
      whileTap={{ scale: 0.9, backgroundColor: "#F5F5F5", color: "#0D1F2D" }}
      {...props}
    />
  );
};

const links = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "GitHub", href: "https://github.com/bpas247" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/brady-pascoe-3bba6b13a/"
  }
];

export default () => {
  const [show, setShow] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    let timerId;
    if (!show) {
      timerId = setTimeout(() => {
        setRemove(true);
      }, 250);
    } else {
      setRemove(false);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [show]);

  const handleShow = () => setShow(prevShow => !prevShow);

  return (
    <StyledNavbar>
      {!remove && (
        <AnimatedNav show={show}>
          {links.map(({ name, ...link }, i) => (
            <AnimatedLink key={name} {...link} index={i} show={show}>
              {name}
            </AnimatedLink>
          ))}
        </AnimatedNav>
      )}
      <AnimatedImg src={ArrowCircle} show={show} onClick={handleShow} />
    </StyledNavbar>
  );
};
