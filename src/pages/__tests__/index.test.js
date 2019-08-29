import React from "react";
import { render } from "@testing-library/react";
import Home from "../index";

describe("Portfolio Home Webpage", () => {
  it("should render without errors.", () => {
    render(<Home />);
  });
});
