import React from "react";
import styled from "styled-components";

import "../styles/global.css";
import Showcase from "../components/Showcase";

const Index = styled.div`
  background-color: #cbc9ff;
`;

const Title = styled.h1`
  color: #ea15bd;
  text-align: center;
`;

const IndexPage = () => (
  <Index>
    <Title>Welcome To My Website</Title>
    <Showcase />
  </Index>
);

export default IndexPage;
