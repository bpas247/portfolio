import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { navigate } from "gatsby";

const StyledCard = styled.div`
  background-color: #d4c5e2;
  max-width: 300px;
  cursor: pointer;
  padding: 1em;
`;

export default ({ img, title, date, path, children }) => (
  <StyledCard onClick={() => navigate(path)}>
    <Img fluid={img} />
    <h2>{title}</h2>
    <b>{date}</b>
    <p>{children}</p>
  </StyledCard>
);
