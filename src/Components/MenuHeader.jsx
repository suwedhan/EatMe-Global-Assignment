import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import SearchIcon from "@mui/icons-material/Search";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Button, Stack } from "@mui/material";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import LabelButton from "./LabelButton";

import Logo from "./Logo";
import Maincard from "./Maincard";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  height: "72px",
  backgroundColor: "white",
  boxShadow: "outlined",
  padding: "0px 130px ",
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
  paddingLeft: "690px",
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
  backgroundColor: "yellow",
  "&:hover": {
    backgroundColor: "yellow",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "200px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function MenuHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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

  return (
    <Box sx={{ flexGrow: 1, display: "block" }}>
      <CustomAppBar
        sx={{
          boxShadow: "1px 1px 1px #EAE7E7 ",
          height: "72px",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Stack
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              gap: 1,
            }}
          >
            {/* header buttons  */}

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <ButtonContainer>
              <Headerbuttons
                disableRipple
                variant="contained"
                startIcon={
                  <OtherHousesOutlinedIcon sx={{ color: "#00ccbc" }} />
                }
              >
                Sign up or log in
              </Headerbuttons>

              <Headerbuttons
                disableRipple
                variant="contained"
                startIcon={
                  <PermIdentityOutlinedIcon sx={{ color: "#00ccbc" }} />
                }
              >
                Account
              </Headerbuttons>
            </ButtonContainer>
          </Stack>
        </Toolbar>
      </CustomAppBar>
      {renderMobileMenu}
      {renderMenu}

      {/* <Maincard /> */}

      <Stack
        sx={{
          justifyContent: "center",
          width: "400px",
          alignContent: "center",
          // alignItems: "center",
          margin: "0 auto",
        }}
      ></Stack>
    </Box>
  );
}