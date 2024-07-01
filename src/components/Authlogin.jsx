import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GoogleIcon from "@mui/icons-material/Google";
import { Typography, Stack, Divider } from "@mui/material";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Authlogin() {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "400px", margin: "0 auto", marginBottom: "60px" }}>
      <Stack direction="column" spacing={2} justifyContent="flex-end">
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="left"
          paddingTop="65px"
          paddingBottom="15px"
        >
          Sign up or log in
        </Typography>

        <Button
          variant="contained"
          startIcon={<FacebookRoundedIcon />}
          disableRipple
          sx={{
            width: "100%",
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
            width: "100%",
            height: "50px",
            color: "#000",
            backgroundColor: "#fff",
            fontSize: "medium",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              background: "#fff", // Keep the same color on hover
              borderColor: "#808080",
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
            width: "100%",
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

        <Stack direction="row" alignItems="center" spacing={2}>
          <Divider sx={{ flexGrow: 1, color: "red" }} />
          <Typography variant="body1">or</Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Stack>

        <Button
          variant="contained"
          startIcon={<MailOutlineIcon />}
          disableRipple
          onClick={() => navigate("/registration")}
          sx={{
            width: "100%",
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
          Continue with email
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }} textAlign="justify">
          By continuing you agree to our{" "}
          <Link href="" underline="1px" sx={{ color: "#00c2b3" }}>
            T&Cs
          </Link>
          . Please also check out our <br />
          <Link href="" underline="1px" sx={{ color: "#00c2b3" }}>
            Privacy Policy
          </Link>
          . We use your data to offer you a personalised <br />
          experience and to better understand and improve our services.
          <br />
          <Link href="" underline="1px" sx={{ color: "#00c2b3" }}>
            For more information see here.
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
