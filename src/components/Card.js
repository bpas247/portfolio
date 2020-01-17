import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { navigate } from "gatsby";
import { motion } from "framer-motion";

const StyledCard = styled(motion.div)`
  background-color: #546a7b;
  max-width: 300px;
  cursor: pointer;
  padding: 1em;
`;

export default ({ img, title, date, path, children }) => (
  <StyledCard
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => navigate(path)}
  >
    <Img fluid={img} />
    <h2>{title}</h2>
    <b>{date}</b>
    <p>{children}</p>
  </StyledCard>
);
