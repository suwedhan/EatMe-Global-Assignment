import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function Register() {
  return (
    <>
      <Box
        component="form"
        width={"400px"}
        sx={{
          margin: "0 auto",
        }}
        noValidate
        autoComplete="off"
        justifyContent="center"
      >
        <Stack direction="column" spacing={2} justifyContent="flex-end">
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="left"
            paddingTop="65px"
            paddingBottom="5px"
          >
            Registration
          </Typography>

          <Typography
            variant="h9"
            fontWeight="bold"
            textAlign="left"
            paddingBottom="5px"
            paddingTop="20px"
          >
            First name
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="First Name"
            variant="outlined"
            sx={{
              "& :focus": {},
            }}
          />

          <Typography
            variant="h9"
            fontWeight="bold"
            textAlign="left"
            paddingBottom="5px"
          >
            Last name
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Last Name"
            variant="outlined"
          />

          <Typography
            variant="h9"
            fontWeight="bold"
            textAlign="left"
            paddingBottom="5px"
          >
            Email address
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Email address"
            variant="outlined"
          />

          <Typography
            variant="h9"
            fontWeight="bold"
            textAlign="left"
            paddingBottom="5px"
          >
            Phone number
          </Typography>
          <TextField id="outlined-basic" placeholder="+44" variant="outlined" />
        </Stack>

        <Button
          variant="contained"
          disableRipple
          paddingTop="20px"
          sx={{
            width: "100%",
            height: "50px",
            backgroundColor: "#00ccbc",
            color: "#fff",
            fontSize: "medium",
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: "0px 0px 0px white",
            marginTop: "80px",
            marginBottom: "50px",
            "&:hover": {
              backgroundColor: "#00c2b3",
              boxShadow: "none",
            },
          }}
        >
          Register
        </Button>
      </Box>
    </>
  );
}
