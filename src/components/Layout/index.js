import React from "react";
import { Navbar } from "../";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

Layout.Title = props => <h1 {...props} />;

Layout.Subtitle = props => <h2 {...props} />;

export default Layout;
