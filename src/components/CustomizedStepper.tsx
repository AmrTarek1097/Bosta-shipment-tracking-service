import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


interface CustomizedStepperProps {
  currentStepId: number;
  message?: string;
}

const steps = [
  "Ticket Created",
  "Package Received",
  "Out For Delivery",
  "Delivered",
];

export default function CustomizedStepper({
  currentStepId,
  message = "",
}: CustomizedStepperProps) {
  return (
    <div className="flex justify-center  my-10 py-10">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={currentStepId} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                {label} {message}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
