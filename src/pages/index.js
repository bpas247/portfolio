import React from "react";
import styled from "@emotion/styled";

import "../styles/global.css";
import { Layout } from "../components";

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

export default () => (
  <Layout>
    <Viewbox>
      <Title>Welcome To My Website :)</Title>
      <div>
        I am a passionate front-end developer and open-source contributor, with
        a focus in React development.
      </div>
    </Viewbox>
  </Layout>
);
