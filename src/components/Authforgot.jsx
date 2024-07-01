import React, { useState } from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Authforgot() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    const emailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailvalid.test(emailValue));
  };

  return (
    <>
      <Stack>
        <Box sx={{ width: "400px", margin: "0 auto", marginBottom: "60px" }}>
          <Stack direction="column" spacing={2} justifyContent="flex-end">
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="left"
              paddingTop="65px"
              paddingBottom="15px"
            >
              Reset your password
            </Typography>
            <Typography variant="h9" textAlign="left">
              To reset your password, we need to send you an email.
            </Typography>

            <Typography variant="h9" textAlign="left">
              Email address
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                    borderWidth: "2px",
                  },
                },
              }}
            />

            <Button
              variant="contained"
              disableRipple
              disabled={!isEmailValid}
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor: isEmailValid ? "#00ccbc" : "#e2e5e5",
                color: "#fff",
                fontSize: "medium",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0px 0px 0px white",
                cursor: isEmailValid ? "pointer" : "not-allowed",
                "&:hover": {
                  backgroundColor: isEmailValid ? "#00b3aa" : "#e2e5e5",
                  cursor: isEmailValid ? "pointer" : "default",
                  boxShadow: "none",
                },
              }}
            >
              Continue
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
