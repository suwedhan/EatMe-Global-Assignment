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
import { Box, Container, Card, Typography, Grid, Stack } from "@mui/material";
import Bowlimg from "./Bowlimg";

export default function Categoryitemhorizontal() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const Description =
    " A tasty dish with a lot of cheese and pasta and mint and bla bla blablab fufb ";
  const maxLength = 24; // Adjust this value as per your requirement
  const truncatedTitle = truncateText(Description, maxLength);

  return (
    <Container sx={{}}>
      <Card
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          position: "relative",
          width: "100%",
          height: "140px",
          boxSizing: "border-box",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px",
          mb: "2vh",
          "&:hover": {
            border: "none",
            background: "white",
            boxShadow: "10px",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            overflow: "hidden",
          }}
        >
          <Typography
            textTransform="none"
            sx={{
              color: "black",
              fontWeight: "600",
              fontSize: "15px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Chicken Burger
          </Typography>
          {/* Description of the item  */}
          <Typography
            textTransform="none"
            sx={{
              color: "black",
              fontWeight: "400",
              fontSize: "15px",
            }}
          >
            {Description}
          </Typography>
          {/* Price of the Item */}
          <Typography
            textTransform="none"
            sx={{
              color: "black",
              fontWeight: "400",
              fontSize: "15px",
            }}
          >
            £20
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          <Stack direction="row" gap={2}>
            <Bowlimg />
            <Button
              disableRipple
              sx={{
                width: "10px ",
                height: "100px",
                background: "white",
                border: "1px solid #00000014",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "40px",
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
        </Box>
      </Card>

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
    </Container>
  );
}
