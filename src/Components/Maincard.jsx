import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TossedImg from "../Assets/TossedImg.png";
import Customdialog from "./Customdialog";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Grid } from "@mui/material";
import Ratingdialog from "./Ratingdialog";
import Deliverdialog from "./Deliverdialog";

import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuHeader from "./MenuHeader";
import Footer from "./Footer";
import Header from "./Header";
import { NoEncryption } from "@mui/icons-material";
import TextField from "@mui/material/TextField";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

const card = (
  <Stack>
    <MenuHeader />

    <Button
      disableRipple
      variant="text"
      startIcon={<ArrowBackIcon sx={{ color: "#00ccbc" }} />}
      sx={{
        color: "#00ccbc", // Set text color to white
        backgroundColor: "#fff", // Set background color to white
        textTransform: "none",
        fontWeight: 400,
        fontSize: "16px",
        paddingRight: "1250px",
        paddingTop: "20px",
        "&:hover": {
          // Adjust hover styles (optional)
          backgroundColor: "#fff",
        },
      }}
    >
      Back
    </Button>

    <Stack direction="row">
      <div style={{ marginRight: "20px" }}>
        <img
          src={TossedImg}
          alt="img"
          style={{ width: "400px", height: "250px" }}
        />
      </div>

      <CardContent
        style={{
          display: "flex",
          // alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack direction="column">
          <Stack
            justifyContent="flex-start"
            textAlign={"left"}
            margin={"10px"}
            direction="row"
          >
            <Stack>
              <Typography
                component="div"
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Tossed - St Martin's Lane
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                justifyContent="flex-start"
              >
                10 - 20 min · Chicken · Salads · Healthy
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                justifyContent="flex-start"
              >
                {" "}
                0.20 miles away · Closes at 21:00 · £7.00 minimum · £0.49
                delivery
              </Typography>
            </Stack>

            <Stack
              direction={"column"}
              sx={{ alignContent: "right", backgroundColor: "yellow" }}
            >
              <Deliverdialog />
              <Button
                disableRipple
                variant="contained"
                startIcon={<GroupOutlinedIcon sx={{ color: "#00ccbc" }} />}
                sx={{
                  color: "black", // Set text color to white
                  backgroundColor: "#fff", // Set background color to white
                  boxShadow: "none",
                  border: "#DCDCDC",
                  borderWidth: "0.5px",
                  borderStyle: "solid",
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "16px",
                  "&:hover": {
                    // Adjust hover styles (optional)
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 0px 0.5px #B6B6B6",
                    border: "black",
                  },
                }}
              >
                Start group order
              </Button>
            </Stack>
          </Stack>

          <Stack sx={{ backgroundColor: "yellow" }}>
            <Customdialog />
            <Ratingdialog />
          </Stack>
        </Stack>
      </CardContent>
    </Stack>

    <Stack direction={"row"} sx={{ mb: "2", display: "flex" }}>
      <Grid container spacing={1} color={"#00ccbc"}>
        <Grid item>
          <Button
            sx={{
              textTransform: "none",
              color: "#00ccbc",
              "&:onhover": { border: "1px", borderRadius: "1px" },
            }}
          >
            Platters
          </Button>
        </Grid>

        <Grid item>
          <Button sx={{ textTransform: "none", color: "#00ccbc" }}>
            New daily Specials
          </Button>
        </Grid>

        <Grid item>
          <Button sx={{ textTransform: "none", color: "#00ccbc" }}>
            Create your own
          </Button>
        </Grid>

        <Grid item>
          <Button sx={{ textTransform: "none", color: "#00ccbc" }}>
            Salads
          </Button>
        </Grid>

        <Grid item>
          <Button sx={{ textTransform: "none", color: "#00ccbc" }}>
            Gym Food
          </Button>
        </Grid>

        <Grid item>
          <Button sx={{ textTransform: "none", color: "#00ccbc" }}>
            Hot Power Bowls
          </Button>
        </Grid>

        <Grid item>
          <Button sx={{ textTransform: "none", color: "#00ccbc" }}>
            Rainbow Wraps
          </Button>
        </Grid>

        <Grid item>
          <Button sx={{ textTransform: "none", color: "#00ccbc" }}>
            Vegan Menu
          </Button>
        </Grid>

        <Grid item>
          <Button sx={{ textTransform: "none", color: "#00ccbc" }}>
            Snacks & Sides
          </Button>
        </Grid>

        <Grid item>
          <Button sx={{ textTransform: "none", color: "#00ccbc" }}>More</Button>
        </Grid>
      </Grid>
    </Stack>
    {/* <Footer /> */}
  </Stack>
);

export default function MainCard() {
  return (
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
