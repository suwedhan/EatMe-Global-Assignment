import { Button, Stack, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import EmailValidator from "@mui/icons-material/Email"; // Import EmailValidator icon

export default function Registration() {
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
              Sign up or log in
            </Typography>

            <Typography variant="h9" textAlign="left">
              Email address
            </Typography>

            <TextField
              id="outlined-basic"
              label="e.g. name@example.com"
              variant="outlined"
            />

            <Button
              variant="contained"
              disableRipple
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor: "#e2e5e5",
                color: "#ABADAD",
                fontSize: "medium",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0px 0px 0px white",
                "&:hover": {
                  backgroundColor: "#e2e5e5",
                  cursor: "not-allowed",
                  boxShadow: "none",
                },
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              disableRipple
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor: "#fff", // Set background color to white
                boxShadow: "none",
                color: "#00c2b3",
                border: "#DCDCDC",
                borderWidth: "0.5px",
                borderStyle: "solid",
                textTransform: "none",
                fontWeight: 400,
                fontSize: "16px",
                "&:hover": {
                  // Adjust hover styles (optional)
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 0px 1px #B6B6B6",
                  border: "#d1d4d4",
                },
              }}
            >
              Forgot Password?
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
