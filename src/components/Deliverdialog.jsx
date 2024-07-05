import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, useTheme } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Deliverdialog({ variant }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  // Determine screen size
  const isMediumScreenSize = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Determine visibility based on variant and screen size
  const isVisible =
    (variant === 2 && isMediumScreenSize) ||
    (variant === 1 && !isMediumScreenSize);

  return (
    <>
      {isVisible && (
        <React.Fragment>
          <Button
            onClick={handleClickOpen}
            disableRipple
            sx={{
              justifyContent: "left",
              textTransform: "none",
              width: "auto",
              border: "1px solid transparent",
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
          >
            <Box direction="column" alignContent="right">
              <Stack direction={"row"} spacing={1}>
                <DirectionsBikeIcon sx={{ color: "#4d7c1b" }} />
                <Typography
                  sx={{
                    color: "black",
                    paddingRight: "10px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontWeight: "400",
                  }}
                >
                  Deliver in 20 - 35 min
                </Typography>
                <Typography
                  sx={{
                    color: "#00ccbc",
                    fontWeight: "400",
                    whiteSpace: "nowrap",
                  }}
                >
                  Change
                </Typography>
              </Stack>
              {variant === 1 && (
                <Button
                  disableRipple
                  variant="contained"
                  startIcon={<GroupOutlinedIcon sx={{ color: "#00ccbc" }} />}
                  style={{
                    color: "black",
                    backgroundColor: "#fff",
                    boxShadow: "none",
                    border: "#DCDCDC",
                    borderWidth: "0.5px",
                    borderStyle: "solid",
                    textTransform: "none",
                    marginTop: "15px",
                    fontWeight: 400,
                    fontSize: "16px",
                    marginLeft: "75px", //margin above this makes the text to go in to two lines
                    "&:hover": {
                      backgroundColor: "#fff",
                      boxShadow: "0px 0px 0px 0.5px #B6B6B6",
                      border: "black",
                    },
                  }}
                >
                  Start group order
                </Button>
              )}
            </Box>
          </Button>

          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Modal title
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Save changes
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </React.Fragment>
      )}
    </>
  );
}
