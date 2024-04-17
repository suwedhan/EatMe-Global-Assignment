import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TossedImg from "../Assets/TossedImg.png";
import Customdialog from "./Customdialog";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "20px" }}>
        <img
          src={TossedImg}
          alt="img"
          style={{ width: "400px", height: "250px" }}
        />
      </div>

      <div>
        <Typography variant="h4" component="div">
          Tossed - St Martin's Lane
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <p>Chicken·Salads·Healthy</p>
          <p>Closes at 21:00·£7.00 minimum·£2.50 delivery</p>
        </Typography>
      </div>

      <Customdialog />
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
