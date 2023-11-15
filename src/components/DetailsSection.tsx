import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import DataTable from "./DataTable.tsx";
import { Status } from "../types.js";
import { useTranslation } from "react-i18next";

export default function DetailsSection({
  transitEvents,
}: {
  transitEvents: Status[];
}) {
  const { t } = useTranslation();

  return (
    <div className=" w-10/12 m-auto my-8 ">
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <Typography className="py-3">{t("Address")}</Typography>
          <Box className="border rounded-md bg-gray-100 p-4 ">
            <Typography textAlign="center">{t("Static Address")}</Typography>
          </Box>
          <div className="flex justify-around border rounded-md bg-gray-100 p-4 my-2 ">
            <Box className="flex flex-col">
              <Typography className="pb-3">{t("Question")}</Typography>

              <Box className="flex ">
                <Button className="btn" variant="contained" size="large">
                  {t("Rebort a problem")}
                </Button>
              </Box>
            </Box>

            <Box>
              <img src="/Questions-amico.png" alt="" className="h-24" />
            </Box>
          </div>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Typography className="py-3 ">{t("Package Details")}</Typography>
          <div className="">
            <DataTable transitEvents={transitEvents!} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
