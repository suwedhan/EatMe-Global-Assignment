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
import { Box, Container, Card, Typography } from "@mui/material";
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

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const title = "Chicken Pasta";
  const maxLength = 20; // Adjust this value as per your requirement
  const truncatedTitle = truncateText(title, maxLength);

  return (
    <Container>
      <Card
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          //   borderWidth: "4px",
          position: "relative",
          //   border: "1px solid black",
          width: "123px",
          height: "266px",
          boxSizing: "border-box",
          cursor: "pointer",
          boxShadow: "20px",
          "&:hover": {
            border: "none",
            background: "white",
            boxShadow: "10px",
            // borderColor: "2px solid black",
          },
        }}
      >
        <Box
          direction="column"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Burgerimg />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              padding: "0 5px",
            }}
          >
            <Box
              sx={{
                height: truncatedTitle.length < title.length ? "auto" : "5vh",
                paddingBottom:
                  truncatedTitle.length < title.length ? "10px" : "0",
              }}
            >
              <Typography
                textTransform="none"
                textAlign="left"
                sx={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "15px",
                  textOverflow: "ellipsis",
                }}
              >
                {truncatedTitle}
              </Typography>
            </Box>

            <Typography
              textTransform="none"
              textAlign="left"
              sx={{
                color: "black",
                fontWeight: "400",
                fontSize: "15px",
              }}
            >
              300 kcal
            </Typography>

            <Typography
              textTransform="none"
              textAlign="left"
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
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "10px",
            }}
          >
            <Button
              disableRipple
              sx={{
                width: "107px",
                height: "34px",
                background: "white",
                border: "1px solid #00000014",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
          </Box>
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
