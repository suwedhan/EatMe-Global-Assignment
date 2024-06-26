import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Searchicon() {
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
        variant="outlined"
        onClick={handleClickOpen}
        disableRipple
        sx={{
          color: "#00b8a9",
          padding: "8px",
          border: "1px solid #e8ebeb",
          margin: "10px",
          bgcolor: "#fff",
          minWidth: 0,
          width: "50px !important",
          height: "40px",
          "&:hover": {
            bgcolor: "#fff",
            borderColor: "#e8ebeb",
            //need to make changes
          },
        }}
      >
        {<SearchIcon />}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{}}
      >
        <DialogTitle id="alert-dialog-title">
          {<KeyboardBackspaceIcon />}
          <TextField
            id="standard-basic"
            label="Search Tossed - Baker Street"
            variant="standard"
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* <p>hello this is a dialog</p> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
