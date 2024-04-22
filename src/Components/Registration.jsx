import { useState } from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import PasswordField from "./PasswordField"; // Import the PasswordField component

export default function Registration() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
              Sign up or log in
            </Typography>
            <Typography variant="h9" textAlign="left">
              Email address
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="e.g. name@example.com"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
            {/* Conditionally render PasswordField based on email */}
            {email === "john@gmail.com" && <PasswordField />}
            <Button
              variant="contained"
              disableRipple
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor:
                  email === "john@gmail.com" ? "#00ccbc" : "#e2e5e5",
                color: "#fff",
                fontSize: "medium",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0px 0px 0px white",
                "&:hover": {
                  backgroundColor:
                    email === "john@gmail.com" ? "#00b3aa" : "#e2e5e5",
                  cursor: "pointer",
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
                backgroundColor:
                  email === "john@gmail.com" ? "#00ccbc" : "#e2e5e5",
                color: "#fff",
                fontSize: "medium",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0px 0px 0px white",
                "&:hover": {
                  backgroundColor:
                    email === "john@gmail.com" ? "#00b3aa" : "#e2e5e5",
                  cursor: "pointer",
                  boxShadow: "none",
                },
              }}
            >
              Register
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
