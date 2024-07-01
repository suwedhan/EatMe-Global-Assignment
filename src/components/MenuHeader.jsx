import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import WindowResize from "../hooks/WindowResize";

import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import { Button, Container, Stack } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Logo from "./Logo";
import Searchicon from "./Searchicon";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  height: "72px",
  backgroundColor: "white",
  // boxShadow: "outlined",

  whiteSpace: "nowrap",
}));

const Headerbuttons = styled(Button)(({}) => ({
  color: "black", // Set text color to white
  backgroundColor: "#fff", // Set background color to white
  boxShadow: "none",
  border: "#DCDCDC",
  borderWidth: "0.5px",
  borderStyle: "solid",
  textTransform: "none",
  fontWeight: 400,
  margin: 0,
  fontSize: "16px",
  "&:hover": {
    // Adjust hover styles (optional)
    backgroundColor: "#fff",
    boxShadow: "0px 0px 0px 0.5px #B6B6B6",
    border: "black",

    // borderWidth: "1px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#0000000a",
  "&:hover": {
    backgroundColor: "#0000000a",
  },
  "&:focus": {
    border: "1px solid " + theme.palette.primary.main, // Change border to primary color on focus
    BorderColor: "black",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "650px",
  height: "46px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#0000000a",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  height: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "65ch",
    },
  },
}));

export default function MenuHeader() {
  const { width } = WindowResize();
  console.log(width < 450);

  return (
    <Container maxWidth="fixed">
      <CustomAppBar
        sx={{
          boxShadow: "0px 1px 1px #EAE7E7 ",
          height: "72px",
          marginRight: 0,
        }}
        position="static"
      >
        <Toolbar
          sx={{
            justifyContent: "space-around",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>

          {/* //condtional rendering of the search icon button */}
          {width < 768 ? <Searchicon /> : ""}

          <Search
            sx={{
              display: width < 768 ? "none" : "inherit",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Tossed - St Martins's Lane"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* <Searchicon /> */}
          <Stack direction="row" gap={1}>
            <Headerbuttons
              sx={{
                display: width < 570 ? "none" : "inherit",
              }}
              disableRipple
              variant="contained"
              startIcon={<OtherHousesOutlinedIcon sx={{ color: "#00ccbc" }} />}
            >
              Sign up or log in
            </Headerbuttons>

            <Headerbuttons
              disableRipple
              variant="contained"
              startIcon={<PermIdentityOutlinedIcon sx={{ color: "#00ccbc" }} />}
            >
              Account
            </Headerbuttons>
          </Stack>
        </Toolbar>
      </CustomAppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
      <Stack
        sx={{
          justifyContent: "center",
          width: "400px",
          alignContent: "center",
          // alignItems: "center",
          margin: "0 auto",
        }}
      ></Stack>
    </Container>
  );
}
