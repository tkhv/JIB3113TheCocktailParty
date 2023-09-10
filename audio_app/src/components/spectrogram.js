import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Tag from "./tag";

const Spectrogram = () => {
  return (
    <div className="info_bar">
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box
          sx={{
            width: "100%",
            height: "380PX",
            border: "2px solid grey",
          }}
        >
          Spectrogram Goes Here
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "250PX",
            border: "2px solid grey",
          }}
        >
          Timescale Goes Here
          <Tag />
        </Box>
      </Grid>
    </div>
  );
};

export default Spectrogram;
