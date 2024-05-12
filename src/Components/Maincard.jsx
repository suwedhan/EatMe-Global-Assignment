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

import Displayitem from "./Displayitem";

// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import {
  Container,
  Divider,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import Ratingdialog from "./Ratingdialog";
import Deliverdialog from "./Deliverdialog";

import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import MenuHeader from "./MenuHeader";
import Scrollnav from "./Scrollnav";
import Footer from "./Footer";
import Header from "./Header";
import { NoEncryption } from "@mui/icons-material";
import TextField from "@mui/material/TextField";

export default function MainCard() {
  console.log("hello ");
  return (
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined">
        <Grid direction={"row"} spacing={2} my={1} mx={5}>
          {/* <MenuHeader /> */}

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

          <Grid
            container
            xs={12}
            s={12}
            md={12}
            lg={12}
            // direction="row"
            rowSpacing={2}
            sx={{
              bgcolor: "yellow",
              display: "flex",
              flexDirection: "row",
              // justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={12}
              s={12}
              md={4}
              lg={4}
              xl={4}
              // spacing={2}
              // sx={{ marginRight: "20px" }}
            >
              <img
                src={TossedImg}
                alt="img"
                // style={{ width: "400px", height: "250px" }}
                style={{ width: "95%", height: "100%" }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              s={12}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                // alignItems: "center",
                flexDirection: "column",
                // width: "100%",
                bgcolor: "blueviolet",
              }}
            >
              <Grid item>
                {/* <Stack
              justifyContent="space-between"
              textAlign={"left"}
              margin={"10px"}
              direction="row"
            > */}
                <Stack>
                  <Typography
                    // component="div"
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      lineHeight: 1,
                    }}
                  >
                    Tossed - St Martin's Lane
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    justifyContent="flex-start"
                  >
                    {""}
                    10 - 20 min · Chicken · Salads · Healthy
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    justifyContent="flex-start"
                  >
                    0.20 miles away · Closes at 21:00 · £7.00 minimum · £0.49
                    delivery
                  </Typography>
                </Stack>
              </Grid>

              {/* <Grid
          container
          direction={"column"}
          sx={{ alignContent: "right", bgcolor: "blue" }}
        >
          <Grid>
            <Deliverdialog />
          </Grid>
  
          <Grid>
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
          </Grid>
        </Grid> */}
              {/* </Stack> */}

              <Stack>
                <Customdialog />
                <Ratingdialog />
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              s={12}
              md={2}
              lg={2}
              xl={2}
              // direction={"column"}
              sx={{
                alignContent: "right",
                bgcolor: "blue",
                direction: "flex",
                flexDirection: "column",
              }}
            >
              <Grid>
                <Deliverdialog />
              </Grid>

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
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

// export default Maincard;

// export default function MainCard() {
//   return (
//     <Box sx={{ minWidth: 500 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }
