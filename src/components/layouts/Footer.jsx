import React from "react";
import { Typography } from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright ${new Date().getFullYear()} © `}
      <a
        href="http://github.com/wilderPariona"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#c51162" }}
      >
        wilderPariona
      </a>
    </Typography>
  );
};

export default Copyright;
