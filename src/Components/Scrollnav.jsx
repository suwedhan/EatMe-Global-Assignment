import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Divider from "@mui/material/Divider";

export default function Scrollnav() {
  const menuitems = [
    "Platters",
    "New daily Specials",
    "Create your own",
    "Salads",
    "Gym food",
    "Hot Power Bowls",
    "Rainbow Wraps",
    "Vegan Menu",
    "Snacks & Sides",
  ];

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack
        direction="row"
        gap={10}
        sx={{ justifyContent: "space-evenly", margin: "15px" }}
      >
        <Stack direction="row" gap={3} sx={{}}>
          {menuitems.map((menuItem, index) => (
            <Button
              sx={{
                textTransform: "none",
                color: "#00ccbc",
                borderRadius: "16px",
              }}
              key={index}
            >
              {menuItem}{" "}
            </Button>
          ))}
        </Stack>

        <Stack>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            endIcon={<ExpandMoreIcon />}
            sx={{
              textTransform: "none",
              color: "#00ccbc",
              borderRadius: "1px",
              borderColor: "#00ccbc",
            }}
          >
            More
          </Button>

          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              Yoghurt & Fruit
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              Cold Drinks
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              Smoothies, Shakes & Juice
            </MenuItem>
          </StyledMenu>
        </Stack>
      </Stack>
    </>
  );
}