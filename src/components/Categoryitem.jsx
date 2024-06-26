import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { Grid, Stack, Typography } from "@mui/material";
import Burgerimg from "./Burgerimg";

export default function Categoryitem() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* main button */}
      <Button
        disableRipple
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          borderWidth: "4px",
          position: "relative",
          border: "0px", // Remove
          width: "123px",
          height: "266px",
          boxShadow: "1px 1px 1px red",
          "&:hover": {
            border: "none",
            background: "white",
            boxShadow: "",
            borderColor: "white",
          },
        }}
      >
        <Stack
          direction="column"
          spacing={0.5}
          container
          sx={{ alignContent: "left", justifyContent: "center" }}
        >
          <Burgerimg />
          <Typography
            textTransform="none"
            sx={{
              alignContent: "flex-start",
              color: "black",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Chicken Burger
          </Typography>
          <Typography
            textTransform="none"
            sx={{
              color: "black",
              fontWeight: "400",
              fontSize: "15px",
              alignContent: "left",
            }}
          >
            300 kcal
          </Typography>

          <Typography
            textTransform="none"
            sx={{
              color: "black",
              fontWeight: "400",
              fontSize: "15px",
              alignContent: "left",
            }}
          >
            £20
          </Typography>

          {/* sub button "+" */}
          <Button
            disableRipple
            sx={{
              justifyContent: "center",
              width: "107px",
              height: "34px",
              background: "white",
              marginTop: "15px",
              border: "1px solid #00000014",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                borderColor: "#d1d4d4",
                background: "white",
              },
            }}
          >
            <AddIcon
              sx={{
                color: "#00ccbc",
                fontSize: "20px",
                "&:hover": {
                  color: "#00a698",
                },
              }}
            />
          </Button>
        </Stack>
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
