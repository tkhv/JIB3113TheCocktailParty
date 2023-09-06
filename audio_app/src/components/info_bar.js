import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../App.css";

const Info_bar = () => {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [timeRange, setTimeRange] = useState([0, 100]);

  const handlePlaybackSpeedChange = (event, newValue) => {
    setPlaybackSpeed(newValue);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2)); // Max zoom: 2
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Min zoom: 0.5
  };

  const handleTimeRangeChange = (event, newValue) => {
    setTimeRange(newValue);
  };

  return (
    <div className="info_bar">
      <Box sx={{ p: 2, border: "2px solid grey" }}>
        <Grid container spacing={12} alignItems="center">
          <Grid item xs={4}>
            <Typography gutterBottom>
              Playback Speed : {playbackSpeed}x
            </Typography>
            <Slider
              value={playbackSpeed}
              step={0.1}
              min={0.5}
              max={2}
              onChange={handlePlaybackSpeedChange}
              valueLabelDisplay="auto"
            />
          </Grid>

          <Grid item xs={4}>
            <Typography gutterBottom>
              Zoom Level: {zoomLevel.toFixed(1)}
            </Typography>
            <ButtonGroup variant="contained" color="primary">
              <Button
                variant="contained"
                color="primary"
                onClick={handleZoomIn}
              >
                Zoom In
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleZoomOut}
              >
                Zoom Out
              </Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs={4}>
            <Typography gutterBottom>Time Range</Typography>
            <div style={{ display: "flex" }}>
              <TextField label="start time" variant="filled" />
              <TextField label="end time" variant="filled" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Info_bar;
