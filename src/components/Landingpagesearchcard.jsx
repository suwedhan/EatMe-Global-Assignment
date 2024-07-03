import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";

import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { Grid } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  backgroundColor: "#0000000a",
  "&:hover": {
    backgroundColor: "#0000000a",
  },
  "&:focus-within": {
    border: "1px solid black",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%", // Make the search bar width responsive
  height: "56px", // Increase the height
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: theme.palette.text.secondary,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginLeft: theme.spacing(1),
  zIndex: 1,
  width: "auto",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  height: "100%",
  flex: 1,
  paddingLeft: theme.spacing(2), // Adjust padding to fit content better
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const CurvedButton = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  marginLeft: theme.spacing(1), // Align button to the right
  height: "90%",
  minWidth: "120px",
}));

export default function Landingpagesearchcard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        width: {
          xs: "100%",
          sm: "100%",
          md: "700px",
        },
        maxWidth: "100%",
        margin: "auto",
      }}
    >
      <Stack direction="column" spacing={2} sx={{ padding: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="black">
            Enter a postcode to see what we deliver:
          </Typography>
        </CardContent>

        <CardActions>
          <Search>
            <SearchIconWrapper>
              <NearMeOutlinedIcon sx={{ color: "#00ccbc" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="e.g. EC4R 3TE"
              inputProps={{ "aria-label": "search" }}
            />
            <CurvedButton
              sx={{
                color: "white",
                bgcolor: "#00ccbc",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": { color: "white", bgcolor: "#00ccbc" },
              }}
              variant="text"
            >
              Search
            </CurvedButton>
          </Search>
        </CardActions>

        <Stack direction="row" alignItems="center">
          <Button
            disableRipple
            size="small"
            variant="text"
            sx={{
              color: "#00ccbc",
              textTransform: "none",
              fontSize: "14px",
              "&:hover": { bgcolor: "white" },
            }}
          >
            Log in
          </Button>
          <Typography sx={{ fontSize: "14px" }}>
            for your recent addresses.
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
