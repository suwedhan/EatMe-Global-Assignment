import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box"; // Add this import
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GoogleIcon from "@mui/icons-material/Google";
import { Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function LabelButton() {
  // const Root = styled('div')(({ theme }) => ({
  //     width: '100%',
  //     ...theme.typography.body2,
  //     color: theme.palette.text.secondary,
  //     '& > :not(style) ~ :not(style)': {
  //       marginTop: theme.spacing(2),
  //     },
  //   }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Button
        variant="contained"
        startIcon={<FacebookRoundedIcon />}
        disableRipple
        sx={{
          width: "400px",
          height: "48px",
          backgroundColor: "#4c69ba",
          fontFamily: "Helvetica",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            background: "#4c69ba", // Keep the same color on hover
          },
        }}
      >
        Continue with Facebook
      </Button>

      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        disableRipple
        sx={{
          width: "400px",
          height: "50px",
          color: "#000",
          backgroundColor: "#fff",
          fontSize: "medium",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            background: "#fff", // Keep the same color on hover
          },
          borderColor: "#808080",
        }}
      >
        Continue with Google
      </Button>

      <Button
        variant="contained"
        startIcon={<AppleIcon />}
        disableRipple
        sx={{
          width: "400px",
          height: "50px",
          backgroundColor: "#000000e6",
          fontSize: "medium",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            background: "#000000e6", // Keep the same color on hover
          },
        }}
      >
        Continue with Apple
      </Button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Divider sx={{ width: "173px", marginRight: "20px" }} />
        <Typography variant="body1">or</Typography>
        <Divider sx={{ width: "173px", marginLeft: "20px" }} />
      </div>

      <Button
        variant="contained"
        startIcon={<MailOutlineIcon />}
        disableRipple
        sx={{
          width: "400px",
          height: "50px",
          backgroundColor: "#00ccbc",
          color: "#fff",
          fontSize: "medium",
          fontWeight: "bold",
          textTransform: "none",
          boxShadow: "0px 0px 0px white",
          "&:hover": {
            backgroundColor: "#00c2b3",
            boxShadow: "none",
          },
        }}
      >
        Continue with Email
      </Button>

      <Typography
        sx={{
          textAlign: "justify",
        }}
      >
        By continuing you agree to our T&Cs. Please also check out our <br />
        Privacy Policy. We use your data to offer you a personalised <br />
        experience and to better understand and improve our services. <br />
        For more information see here.
      </Typography>
    </Box>
  );
}
