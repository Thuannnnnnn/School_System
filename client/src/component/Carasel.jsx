import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-nen-anime-3d-cho-may-tinh-11.jpg",
  },
  {
    label: "Bird",
    imgPath:
    "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-nen-anime-3d-cho-may-tinh-11.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
    "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-nen-anime-3d-cho-may-tinh-11.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
    "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-nen-anime-3d-cho-may-tinh-11.jpg",
  },
];

function Carasel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
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
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className=" rounded-xl"
        >
          {images.map((step, index) => (
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
                  src={step.imgPath}
                  alt={step.label}
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
