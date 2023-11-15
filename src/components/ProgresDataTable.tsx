import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TrackingDetails } from "../types.js";
import Stepper from "./Stepper.jsx";
import { useTranslation } from "react-i18next";

export default function ProgresDataTable({
  CreateDate,
  CurrentStatus,
  PromisedDate,
  SupportPhoneNumbers,
  TrackingNumber,
  TrackingURL,
  TransitEvents,
  isEditableShipment,
  nextWorkingDay,
  provider,
}: TrackingDetails) {
  const [currentStepId, setCurrentStepId] = useState<number>();
  const [messege, setMessege] = useState<any>();
  const { t } = useTranslation();

  useEffect(() => {
    if (CurrentStatus) {
      switch (CurrentStatus?.state) {
        case "TICKET_CREATED":
          setCurrentStepId(0);
          break;
        case "PACKAGE_RECEIVED":
          setCurrentStepId(1);
          break;
        case "OUT_FOR_DELIVERY":
        case "DELIVERED_TO_SENDER":
        case "CANCELLED":
          setCurrentStepId(2);
          break;
        case "DELIVERED":
          setCurrentStepId(3);
          break;
        default:
          setCurrentStepId(0);
      }
    } else {
      setCurrentStepId(-1);
      setMessege("");
    }
  }, [CurrentStatus]);

  useEffect(() => {
    const reason = TransitEvents?.filter(
      (transitEvents) => transitEvents.reason
    );

    reason && setMessege(reason![0]?.reason);
  }, [TrackingNumber, TransitEvents]);

  return (
    <Grid xs={12}>
      <div className="w-11/12	m-auto">
        <div className="border flex space-between mt-10 font-extrabold py-6 ps-12 mx-12">
          <Grid container>
            <Grid item textAlign="center" xs={3}>
              <Typography style={{ fontWeight: 0, color: "gray" }}>
                {t("Shipment number")} {TrackingNumber}
              </Typography>
              <Typography className="text-red-600" style={{ fontWeight: 900 }}>
                {CurrentStatus?.state?.split("_").join(" ")}
              </Typography>
            </Grid>
            <Grid item textAlign="center" xs={3}>
              <Typography style={{ fontWeight: 0, color: "gray" }}>
                {t("Last Update")}
              </Typography>
              <Typography style={{ fontWeight: 900 }}>
                {CurrentStatus?.timestamp.slice(0, 10).split("-").join("/")}
              </Typography>
            </Grid>
            <Grid item textAlign="center" xs={3}>
              <Typography style={{ fontWeight: 0, color: "gray" }}>
                {t("Seller Name")}
              </Typography>
              <Typography style={{ fontWeight: 900 }}> {provider}</Typography>
            </Grid>
            <Grid item textAlign="center" xs={3}>
              <Typography style={{ fontWeight: 0, color: "gray" }}>
                {t("Promised Date")}
              </Typography>
              <Typography style={{ fontWeight: 900 }}>
                {PromisedDate?.slice(0, 10).split("-").join("/")}
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className="border mx-12 py-8">
          <Grid item xs={12}>
            {/* <CustomizedStepper currentStepId={currentStepId} /> */}
            <Stepper
              currentStepId={currentStepId}
              message={messege}
              status={CurrentStatus?.state}
            />
          </Grid>
        </div>
      </div>
    </Grid>
  );
}
