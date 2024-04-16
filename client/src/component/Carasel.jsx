import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function Carasel() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/Events/getEvents`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;
  const handleStepChange = (step) => {
    setActiveStep(step);
  };



  return (
    <div className="flex justify-center">
      <Box sx={{ width: "full", flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          {data.length > 0 && <Typography>{data[activeStep].E_Name}</Typography>}
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className=" rounded-xl"
        >
          {data.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 334,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.E_HorizontalPoster}
                  alt={step.E_Name}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <div className="flex justify-center">
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
        </div>
      </Box>
    </div>
  );
}

export default Carasel;
