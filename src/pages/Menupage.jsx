import React from "react";
import Maincard from "../components/Maincard";
import Scrollnav from "../components/Scrollnav";
import Scrollablemenucard from "../components/Scrollablemenucard";
import Basketcard from "../components/Basketcard";
import Categoryitemhorizontal from "../components/Categoryitemhorizontal";
import { Container, Grid, Stack } from "@mui/material";

function Menupage() {
  return (
    <>
      <Maincard />
      <Scrollnav />

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
            <Categoryitemhorizontal />
            <Categoryitemhorizontal />
            <Categoryitemhorizontal />
            <Categoryitemhorizontal />
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
    </>
  );
}

export default Menupage;
