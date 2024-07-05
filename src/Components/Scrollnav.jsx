import * as React from "react";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme, useMediaQuery, Divider } from "@mui/material";
import { BorderAllRounded } from "@mui/icons-material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Scrollnav() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [visibleTabs, setVisibleTabs] = useState([]);
  const [hiddenTabs, setHiddenTabs] = useState([]);

  useEffect(() => {
    const updateTabs = () => {
      const categories = [
        {
          title: "Platters",
          href: "#platters",
          items: [
            { label: "Platter 1" },
            { label: "Platter 2" },
            { label: "Platter 3" },
          ],
        },
        {
          title: "House Specials",
          href: "#house-specials",
          items: [
            { label: "Special 1" },
            { label: "Special 2" },
            { label: "Special 3" },
          ],
        },
        {
          title: "Create your own",
          href: "#create-your-own",
          items: [
            { label: "Custom 1" },
            { label: "Custom 2" },
            { label: "Custom 3" },
          ],
        },
        {
          title: "Salads",
          href: "#salads",
          items: [
            { label: "Salad 1" },
            { label: "Salad 2" },
            { label: "Salad 3" },
          ],
        },
        {
          title: "Gym food",
          href: "#gym-food",
          items: [
            { label: "Gym Meal 1" },
            { label: "Gym Meal 2" },
            { label: "Gym Meal 3" },
          ],
        },
        {
          title: "Hot Power Bowls",
          href: "#hot-power-bowls",
          items: [
            { label: "Power Bowl 1" },
            { label: "Power Bowl 2" },
            { label: "Power Bowl 3" },
          ],
        },
        {
          title: "Rainbow Wraps",
          href: "#rainbow-wraps",
          items: [
            { label: "Wrap 1" },
            { label: "Wrap 2" },
            { label: "Wrap 3" },
          ],
        },
        {
          title: "Vegan Menu",
          href: "#vegan-menu",
          items: [
            { label: "Vegan Dish 1" },
            { label: "Vegan Dish 2" },
            { label: "Vegan Dish 3" },
          ],
        },
        {
          title: "Snacks & Sides",
          href: "#snacks-sides",
          items: [
            { label: "Snack 1" },
            { label: "Snack 2" },
            { label: "Snack 3" },
          ],
        },
        {
          title: "Yoghurt & fruit",
          href: "#yoghurt-fruit",
          items: [
            { label: "Yoghurt 1" },
            { label: "Fruit 1" },
            { label: "Yoghurt 2" },
          ],
        },
        {
          title: "Cold Drinks",
          href: "#cold-drinks",
          items: [
            { label: "Drink 1" },
            { label: "Drink 2" },
            { label: "Drink 3" },
          ],
        },
        {
          title: "Smoothies, shakes & juice",
          href: "#smoothies",
          items: [
            { label: "Smoothie 1" },
            { label: "Shake 1" },
            { label: "Juice 1" },
          ],
        },
      ];

      const containerWidth =
        document.getElementById("tabs-container")?.offsetWidth || 0;
      const tabWidth = 150; // Approximate width of each tab
      const maxVisibleTabs = Math.max(Math.floor(containerWidth / tabWidth), 4);

      if (isSmallScreen) {
        setVisibleTabs(categories.slice(0, maxVisibleTabs));
        setHiddenTabs(categories.slice(maxVisibleTabs));
      } else if (isMediumScreen) {
        setVisibleTabs(categories.slice(0, maxVisibleTabs));
        setHiddenTabs(categories.slice(maxVisibleTabs));
      }
    };

    updateTabs();
    window.addEventListener("resize", updateTabs);
    return () => window.removeEventListener("resize", updateTabs);
  }, [isSmallScreen, isMediumScreen]);

  useEffect(() => {
    // Function to handle external link navigation with scrolling
    const handleExternalLinkNavigation = (event) => {
      const href = event.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        const sectionId = href.substring(1); // Remove the '#'
        const section = document.getElementById(sectionId);
        if (section) {
          event.preventDefault(); // Prevent default anchor behavior
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Attach event listener to handle external link clicks
    document.addEventListener("click", handleExternalLinkNavigation);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("click", handleExternalLinkNavigation);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Optionally, scroll to the corresponding section here as well
    // if you want to scroll when tabs within the component are clicked.
  };

  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index) => {
    setValue(index);
    handleClose();
  };

  const tabStyle = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    textTransform: "none",
    minHeight: "20px",
    minWidth: "auto",
    margin: "0 10px",
    color: "#00ccbc",
    "&.Mui-selected": {
      color: "white",
      backgroundColor: "#00ccbc",
    },
  };

  const menuItemStyle = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    margin: "2px 8px",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    "&.Mui-selected": {
      backgroundColor: "#00ccbc",
      color: "white",
    },
    "&:focus": {
      backgroundColor: "#ffffff",
    },
  };

  return (
    <>
      <Divider />
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          top: 73,
          zIndex: 1100,
          backgroundColor: "white",
          justifyContent: "center",
          alignSelf: "center",
          marginBottom: "20px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          paddingTop: "8px",
        }}
      >
        <Box
          sx={{
            borderBottom: 0,
            overflowX: "auto",
            justifyContent: "center",
            display: "flex",
          }}
          id="tabs-container"
        >
          <Tabs
            sx={{
              justifyContent: "center",
              margin: "1vh auto",
            }}
            value={value}
            onChange={handleChange}
            aria-label="responsive tabs"
            TabIndicatorProps={{ style: { display: "none" } }}
            variant="scrollable"
            scrollButtons="auto"
          >
            {visibleTabs.map((category, index) => (
              <Tab
                key={category.title}
                label={category.title}
                href={category.href}
                {...a11yProps(index)}
                sx={tabStyle}
              />
            ))}
            {hiddenTabs.length > 0 && (
              <Tab
                label="More"
                aria-controls="more-menu"
                aria-haspopup="true"
                onClick={handleMoreClick}
                sx={tabStyle}
              />
            )}
          </Tabs>
          <Menu
            id="more-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ disablePadding: true }}
          >
            {hiddenTabs.map((category, index) => (
              <MenuItem
                key={category.title}
                onClick={() => handleMenuItemClick(visibleTabs.length + index)}
                sx={menuItemStyle}
              >
                {category.title}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </>
  );
}
