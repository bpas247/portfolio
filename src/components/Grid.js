import React from "react";
import { Box } from "rebass";

export default props => (
  <Box
    {...props}
    sx={{
      display: "grid",
      gridGap: 3
    }}
  />
);
