import React from "react";
import { Navbar } from "./";

export default ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);
