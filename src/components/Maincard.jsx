import * as React from "react";
import { Box, Card, Button, Typography, Stack, Grid } from "@mui/material";
import Customdialog from "./Customdialog";
import Ratingdialog from "./Ratingdialog";
import Deliverdialog from "./Deliverdialog";
import TossedImage from "./TossedImage";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MainCard() {
  return (
    <Box>
      <Button
        startIcon={<ArrowBackIcon />}
        variant="text"
        sx={{
          color: "black",
          // position: "absolute",
          top: "8px",
          left: "8px",
        }}
      >
        Back
      </Button>
      <Card variant="outlined" sx={{ marginTop: "16px", padding: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ position: "relative" }}>
            <TossedImage />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h4" fontWeight="bold">
              Tossed - St Martin's Lane
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 1.5 }}>
              10 - 20 min · Chicken · Salads · Healthy
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 1.5 }}>
              0.20 miles away · Closes at 21:00 · £7.00 minimum · £0.49 delivery
            </Typography>
            <Stack direction="column" spacing={2}>
              <Customdialog />
              <Ratingdialog />
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Deliverdialog />
            <Button
              disableRipple
              variant="contained"
              startIcon={<GroupOutlinedIcon sx={{ color: "#00ccbc" }} />}
              sx={{
                color: "black",
                backgroundColor: "#fff",
                boxShadow: "none",
                border: "#DCDCDC",
                borderWidth: "0.5px",
                borderStyle: "solid",
                textTransform: "none",
                fontWeight: 400,
                fontSize: "16px",
                mt: 2,
                "&:hover": {
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 0px 0.5px #B6B6B6",
                  border: "black",
                },
              }}
            >
              Start group order
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
