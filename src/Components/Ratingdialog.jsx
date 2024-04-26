// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import Stack from "@mui/material/Stack";

// import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

// export default function Ratingdialog() {
//   const [open, setOpen] = React.useState(false);
//   const [scroll, setScroll] = React.useState("paper");

//   const handleClickOpen = (scrollType) => () => {
//     setOpen(true);
//     setScroll(scrollType);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const descriptionElementRef = React.useRef(null);
//   React.useEffect(() => {
//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//   }, [open]);

//   return (
//     <React.Fragment>
//       <Button
//         onClick={handleClickOpen("paper")}
//         disableRipple
//         variant="text"
//         startIcon={<StarOutlinedIcon />}
//         endIcon={<ArrowForwardIosOutlinedIcon />}
//         sx={{
//           // ... other styles
//           textTransform: "none",

//           color: "#4d7c1b",
//           paddingRight: "255px",
//           "&:hover": {
//             // Adjust hover styles (optional)
//             backgroundColor: "#fff",
//           },
//           "& span": {
//             // Target the content container within the button
//             whiteSpace: "normal", // Allow line breaks based on content width
//           },
//         }}
//       >
// <Stack textAlign={"left"}>
//   <div>4.8 Excellent</div>
//   <div>See all 500 reviews</div>
// </Stack>
//       </Button>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         scroll={scroll}
//         aria-labelledby="scroll-dialog-title"
//         aria-describedby="scroll-dialog-description"
//       >
//         <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//         <DialogContent dividers={scroll === "paper"}>
//           <DialogContentText
//             id="scroll-dialog-description"
//             ref={descriptionElementRef}
//             tabIndex={-1}
//           >
//             {[...new Array(50)]
//               .map(
//                 () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//               )
//               .join("\n")}
//           </DialogContentText>
//         </DialogContent>
//       </Dialog>
//     </React.Fragment>
//   );
// }

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

import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        // variant="text"
        onClick={handleClickOpen}
        disableRipple
        startIcon={<StarOutlinedIcon sx={{ color: "#4d7c1b" }} />}
        endIcon={<ArrowForwardIosOutlinedIcon sx={{ color: "#00ccbc" }} />}
        sx={{
          // ... other styles
          textTransform: "none",
          paddingRight: "301px",
          border: "1px",
          "&:hover": {
            // Adjust hover styles (optional)
            backgroundColor: "#fff",
          },

          "& span": {
            // Target the content container within the button
            whiteSpace: "normal", // Allow line breaks based on content width
          },
        }}
      >
        <Stack textAlign={"left"}>
          <Stack textAlign={"left"}>
            <div style={{ color: "#4d7c1b" }}>4.8 Excellent</div>
            <div style={{ color: "#585c5c" }}>See all 500 reviews</div>
          </Stack>
        </Stack>
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
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
