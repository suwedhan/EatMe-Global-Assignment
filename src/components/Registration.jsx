import React, { useState } from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";
import Header from "./MainComponents/Header";
import Footer from "./MainComponents/Footer";

export default function Registration() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loginButtonactive, setloginbuttonactive] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // setloginbuttonactive(email === "john@gmail.com"); // Update logindisable based on email

    if (email === "john@gmail.co") {
      setloginbuttonactive(email === "john@gmail.com");
    } else setloginbuttonactive(true);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((prevShow) => !prevShow);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
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
              // sx={{
              //   "&.MuiTextField-root": {
              //     border: "2px",
              //     borderColor: "#000",
              //   },
              // }}
            />
            {/* Conditionally render PasswordField based on email */}
            {email === "john@gmail.com" && (
              <FormControl sx={{ m: 1, width: "400px" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        //   aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Password"
                />
              </FormControl>
            )}

            <Button
              variant="contained"
              disableRipple
              disabled={loginButtonactive}
              onClick={() => navigate("/menu")}
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor: "#00ccbc",
                color: "#fff",
                fontSize: "medium",
                fontWeight: "bold",
                textTransform: "none",
                // cursor: "not-allowed",
                boxShadow: "0px 0px 0px white",
                "&.Mui-disabled": {
                  // Target disabled state
                  backgroundColor: "#e2e5e5", // Set disabled color
                },
                "&:hover": {
                  backgroundColor: "#00b3aa",
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
              disabled={!loginButtonactive}
              onClick={() => navigate("/register")}
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor: "#00ccbc",
                color: "#fff",
                fontSize: "medium",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0px 0px 0px white",
                "&.Mui-disabled": {
                  // Target disabled state
                  backgroundColor: "#e2e5e5", // Set disabled color
                },
                "&:hover": {
                  backgroundColor: "#00b3aa",
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
      <Footer />
    </>
  );
}
