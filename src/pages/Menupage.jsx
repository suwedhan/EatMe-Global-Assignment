import React from "react";
import Maincard from "../components/Maincard";
import Scrollnav from "../components/Scrollnav";
import Scrollablemenucard from "../components/Scrollablemenucard";
import Basketcard from "../components/Basketcard";
import Categoryitemhorizontal from "../components/Categoryitemhorizontal";
import { Box, Container, Grid, Stack } from "@mui/material";
import CategoryList from "../components/CategoryList";

function Menupage() {
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
      items: [{ label: "Salad 1" }, { label: "Salad 2" }, { label: "Salad 3" }],
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
      items: [{ label: "Wrap 1" }, { label: "Wrap 2" }, { label: "Wrap 3" }],
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
      items: [{ label: "Snack 1" }, { label: "Snack 2" }, { label: "Snack 3" }],
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
      items: [{ label: "Drink 1" }, { label: "Drink 2" }, { label: "Drink 3" }],
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

  return (
    <>
      <Box sx={{ mx: 5 }}>
        <Maincard />
      </Box>

      <Scrollnav />
      <Box sx={{ mx: 5 }}>
        <Grid
          container
          spacing={2}
          rowSpacing={3}
          direction="row"
          justifyContent="space-between" // Spread out the components
        >
          <Grid item xs={12} md={8} lg={8}>
            {/* Adjust the size for the remaining space */}
            <Stack direction="column" spacing={2}>
              <Scrollablemenucard />

              {categories.map((category, index) => (
                <div
                  id={category.href.substring(1)}
                  style={{ padding: "20px 0" }}
                >
                  <CategoryList
                    key={index}
                    title={category.title}
                    items={category.items}
                    href={category.href}
                  />
                </div>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            md={4}
            lg={4}
            xl={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Basketcard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Menupage;
