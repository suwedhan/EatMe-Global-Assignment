import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import WindowResize from "./CustomHooks/WindowResize";

import IconButton from "@mui/material/IconButton";

// import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import SearchIcon from "@mui/icons-material/Search";

import { Button, Grid, Stack } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";

import Logo from "./Logo";
import MediaQuery from "react-responsive";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  height: "72px",
  backgroundColor: "white",
  boxShadow: "outlined",

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
  fontSize: "16px",
  "&:hover": {
    // Adjust hover styles (optional)
    backgroundColor: "#fff",
    boxShadow: "0px 0px 0px 0.5px #B6B6B6",
    border: "black",

    // borderWidth: "1px",
  },
}));

const ButtonContainer = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "flex-end",
  // paddingLeft: "690px",
  gap: "6px",
  border: "none",

  "&:hover": {
    border: "none",
    boxShadow: "none",

    // Adjust hover styles (optional)
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
  // marginRight: theme.spacing(2),
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

// stlying for responsiveness

// const hiddenTheme = styled("")(({ theme }) => ({
//   [theme.breakpoints.up("sm")]: {
//     backgroundColor: "black",
//   },
// }));

export default function MenuHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // hook for conditional rendering of the Signup button

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  const { width, height } = WindowResize();

  return (
    <Grid container>
      <CustomAppBar
        sx={{
          boxShadow: "1px 1px 1px #EAE7E7 ",
          height: "72px",
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

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Tossed - St Martins's Lane"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Headerbuttons
            hidden
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
    </Grid>
  );
}
