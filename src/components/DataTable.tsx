import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import format from "date-fns/format";
import { Status } from "../types";
import { useTranslation } from "react-i18next";

const steps = [
  "Ticket Created",
  "Package Received",
  "Out For Delivery",
  "Delivered",
];

export default function DataTable({
  transitEvents,
}: {
  transitEvents: Status[];
}) {
  const { t } = useTranslation();



  let tempEvents = [
    transitEvents?.find((te) => te.state === "TICKET_CREATED"),
    transitEvents?.find((te) => te.state === "PACKAGE_RECEIVED"),
    transitEvents?.find((te) => te.state === "OUT_FOR_DELIVERY"),
    transitEvents?.find(
      (te) =>
        te.state === "DELIVERED_TO_SENDER" ||
        te.state === "DELIVERED" ||
        te.state === "CANCELLED"
    ),
  ];

  tempEvents = tempEvents.filter((te) => !!te);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead className="bg-gray-100">
          <TableCell className="table" align="center">
            {t("Branch")}
          </TableCell>
          <TableCell className="table" align="center">
            {t("Date")}
          </TableCell>
          <TableCell className="table" align="center">
            {t("Time")}
          </TableCell>
          <TableCell className="table" align="center">
            {t("Details")}
          </TableCell>
        </TableHead>
        <TableBody>
          {tempEvents?.map((transitEvent, index) => (
            <TableRow key={`row-${index}`}>
              <TableCell className="table" align="center">
                {transitEvent?.hub}
              </TableCell>

              <TableCell className="table" align="center">
                {transitEvent?.timestamp &&
                  format(new Date(transitEvent?.timestamp), "yyyy/MM/dd")}
              </TableCell>

              <TableCell className="table" align="center">
                {transitEvent?.timestamp &&
                  format(new Date(transitEvent?.timestamp), "hh:mm a")}
              </TableCell>

          

              <TableCell className="table" align="center">
                {transitEvent?.state
                  .replaceAll("_", " ")
                  .replace(/\w+/g, function (w) {
                    return w[0].toUpperCase() + w.slice(1).toLowerCase();
                  })}
                {transitEvent?.reason}
              </TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
