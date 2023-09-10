import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Tag = () => {
  return (
    <div
      sx={{
        width: "10px",
        height: "50PX",
        display: "flex",
      }}
    >
      <TextField style={{ width: 100 }} label="sample tag" variant="filled" />
    </div>
  );
};

export default Tag;
