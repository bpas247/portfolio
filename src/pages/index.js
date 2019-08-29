import React from "react";
import styled from "styled-components";

import "../styles/global.css";
import Showcase from "../components/Showcase";

const Index = styled.div``;

const Title = styled.h1`
  color: #7ce1ed;
  text-align: center;
`;

const Viewbox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25em;
  position: relative;
  text-align: center;
`;

const IndexPage = () => (
  <Index>
    <Viewbox>
      <Title>Welcome To My Website</Title>
      <Showcase />
    </Viewbox>
  </Index>
);

export default IndexPage;
