import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import {
  AddCircle,
  Inventory,
  LocalShipping,
  Beenhere,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// Line Color Control
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(233,0,0) 0%,rgb(233,0,0) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(233,0,0) 0%,rgb(233,0,0) 100%)",
    },
  },
  [`& .${stepConnectorClasses.lineHorizontal}`]: {
    height: 7,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

// Node Color Control
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(233,0,0) 0%, rgb(233,0,0) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(233,0,0) 0%, rgb(233,0,0) 100%)",
  }),
}));

// Icons Control Function
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AddCircle />,
    2: <Inventory />,
    3: <LocalShipping />,
    4: <Beenhere />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const stepsEn = [
  "Ticket Created",
  "Package Received",
  "Out For Delivery",
  "Delivered",
];

const stepsAr = [
  "تم انشاء الشحنة",
  "تم استلام الشحنة من التاجر",
  "الشحنة خرجت للتسليم",
  "تم التسليم",
];

export default function CustomizedSteppers({
  currentStepId,
  message = " ",
  status = "",
}) {
  const { t } = useTranslation();
  return (
    <Stack sx={{ width: "100&" }} spacing={4}>
      <Stepper
        className="nav-font"
        alternativeLabel
        activeStep={currentStepId}
        connector={<ColorlibConnector />}
      >
        {document.querySelector("html")?.lang === "ar"
          ? stepsAr.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>

                {label === "الشحنة خرجت للتسليم" ? (
                  <Typography className="text-red-600	text-center my-8 font-bold">
                    {message}
                  </Typography>
                ) : (
                  ""
                )}

                {label === "الشحنة خرجت للتسليم" ? (
                  <Typography className="text-red-600	text-center my-8 font-bold">
                    {status === "DELIVERED" ? " " : status.split("_").join(" ")}
                  </Typography>
                ) : (
                  ""
                )}
              </Step>
            ))
          : stepsEn.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>

                {label === "Out For Delivery" ? (
                  <Typography className="text-red-600	text-center my-8 font-bold">
                    {message}
                  </Typography>
                ) : (
                  ""
                )}

                {label === "Out For Delivery" ? (
                  <Typography className="text-red-600	text-center my-8 font-bold">
                    {status === "DELIVERED" ? " " : status.split("_").join(" ")}
                  </Typography>
                ) : (
                  ""
                )}
              </Step>
            ))}
      </Stepper>
    </Stack>
  );
}
