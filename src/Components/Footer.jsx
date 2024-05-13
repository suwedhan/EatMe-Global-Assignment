import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Outlinedcard from "./OutlineCard";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Downloadios from "./Downloadios";
import Downloadplay from "./Downloadplay";
import { Grid } from "@mui/material";

export default function Footer() {
  const Discover = [
    "Investors",
    "About us",
    "Takeaway",
    "More",
    "Newsroom",
    "Engineering Blog",
    "Design Blog",
    "Gift cards",
    "Deliveroo Students",
    "Careers",
    "Restaurant Signup",
    "Become a rider",
  ];
  const Legal = [
    "Terms and Conditions",
    "Privacy",
    "Cookies",
    "Modern Slavery Statement",
    "Tax Strategy",
    "Section 172 Statement",
    "Public Authority Requests",
  ];
  const Help = ["Contact", "FAQs", "Cuisines", "Brands"];
  const TakeDeliveroowithyou = [<Downloadios />, <Downloadplay />];

  return (
    <Grid
      // item
      // xs={12}
      alignItems="center"
      // display={"flex"}
      sx={{
        backgroundColor: "#2e3333",
        paddingBlock: "20px",
        paddingInline: "16px",
      }}
    >
      <Grid
        container
        spacing={34}
        // spacing={{ lg: 37, xs: 0 }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={2}
          sx={{
            marginBottom: "4px",
          }}
        >
          <Outlinedcard Cardarray={Discover} Title={"Discover Deliveroo"} />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={2}
          sx={{
            marginBottom: "4px",
          }}
        >
          <Outlinedcard Cardarray={Legal} Title={"Legal"} />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={2}
          sx={{
            marginBottom: "4px",
          }}
        >
          <Outlinedcard Cardarray={Help} Title={"Help"} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={2}
          sx={{
            marginBottom: "4px",
          }}
        >
          <Outlinedcard
            Cardarray={TakeDeliveroowithyou}
            Title={"Take Deliveroo with you"}
            svg={true}
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        display={"flex"}
        sx={{
          justifyContent: "space-between",
          color: "#fff",
          // marginBottom: "5px",
          // padding: "0 16px", // Add padding to the sides for spacing
          width: "100%",
        }}
      >
        <Stack direction={"row"} spacing={2} sx={{ paddingLeft: "18px" }}>
          {/* Icon Stack */}
          <FacebookRoundedIcon
            sx={{ fontSize: "24px", "&:hover": { color: "#1877F2" } }}
          />
          <TwitterIcon
            sx={{ fontSize: "24px", "&:hover": { color: "#1DA1F2" } }}
          />
          <InstagramIcon
            sx={{ fontSize: "24px", "&:hover": { color: "#ee2a7b" } }}
          />
        </Stack>

        <Stack
          sx={{
            justifyContent: "flex-end",
            display: "flex",
            paddingRight: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#585c5c",
            }}
          >
            © 2024 Deliveroo
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
