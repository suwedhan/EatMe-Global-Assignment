import * as React from "react";
import {
  Box,
  Card,
  Button,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Customdialog from "./Customdialog";
import Ratingdialog from "./Ratingdialog";
import Deliverdialog from "./Deliverdialog";
import TossedImage from "./TossedImage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MainCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ boxShadow: "none", margin: 2 }}>
      {!isMobile && (
        <Button
          disableRipple
          startIcon={<ArrowBackIcon />}
          variant="text"
          sx={{
            color: "#00ccbc",
            // position: "absolute",
            left: 20,
            textTransform: "none",
            fontSize: "16px",
            "&:hover": {
              bgcolor: "white",
            },
          }}
        >
          Back
        </Button>
      )}
      <Card sx={{ boxShadow: "none", marginLeft: "2vh" }}>
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
            <Typography fontSize="40px" fontWeight="bold">
              Tossed - St Martin's Lane
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight="500"
              sx={{ mb: 1.5 }}
            >
              10 - 20 min · Chicken · Salads · Healthy
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight="500"
              sx={{ mb: 1.5 }}
            >
              0.20 miles away · Closes at 21:00 · £7.00 minimum · £0.49 delivery
            </Typography>
            <Stack direction="column" spacing={2}>
              <Customdialog />
              <Ratingdialog />
              <Deliverdialog variant={2} />
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
            <Deliverdialog variant={1} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
