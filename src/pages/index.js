import React from "react";
import styled from "@emotion/styled";

import "../styles/global.css";
import { Layout } from "../components";

const Title = styled.h1`
  text-align: center;
`;

const Subtitle = styled.h2`
  text-align: center;
`;

export default () => (
  <Layout>
    <Title>Welcome To My Website :)</Title>
    <Subtitle>
      I am a passionate front-end developer and open-source contributor, with a
      focus in React development.
    </Subtitle>
  </Layout>
);
