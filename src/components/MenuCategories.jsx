import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Categoryitemhorizontal from "./Categoryitemhorizontal";

function MenuCategories() {
  return (
    <Container>
      <Typography
        sx={{
          color: "#2e3333",
          fontSize: "22px",
          fontWeight: "800",
          marginBottom: "20px",
          marginLeft: "3vh",
        }}
      >
        House Specials
      </Typography>
      <Grid container spacing={2} alignItems="left" sx={{ width: "100%" }}>
        <Grid item xs={12} sm={6}>
          <Categoryitemhorizontal />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Categoryitemhorizontal />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Categoryitemhorizontal />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Categoryitemhorizontal />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MenuCategories;
