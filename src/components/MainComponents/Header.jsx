import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Button, Stack } from "@mui/material";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import Logo from "../Logo";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  height: "72px",
  backgroundColor: "white",
  boxShadow: "outlined",
  padding: "0px 130px ",
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

export default function Header() {
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
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>

        <p>Profile</p>
      </MenuItem>
    </Menu>
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
