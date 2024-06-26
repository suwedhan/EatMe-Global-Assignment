import React from "react";
import { CardContent, Typography, Grid, Stack, Container } from "@mui/material";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Downloadios from "../Downloadios";
import Downloadplay from "../Downloadplay";
import WindowResize from "../../hooks/WindowResize";

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

const OutlinedCard = ({ cardArray, title }) => {
  return (
    <CardContent
      sx={{
        backgroundColor: "hsla(0,0%,100%,.1)",
        padding: "24px",
        flexGrow: 1,
        display: { md: "auto" },
        flexDirection: "column",
        minHeight: { xs: "auto", md: 380 },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      {cardArray.map((item, index) => (
        <Typography
          key={index}
          sx={{
            color: "#fff",
            textAlign: "left",
            fontSize: "14px",
            fontWeight: 450,
            lineHeight: "28px",
          }}
        >
          {item}
        </Typography>
      ))}
    </CardContent>
  );
};

const Footer = () => (
  <Stack
    sx={{
      width: "100%",
      backgroundColor: "#2e3333",
      padding: "1vh",
      paddingBottom: "30px",
    }}
  >
    <Grid
      container
      spacing={2}
      sx={{
        px: { xs: 0, sm: 5, md: 10, lg: 20 },
        width: "100%",
        backgroundColor: "#2e3333",
      }}
    >
      <Grid sx={{ height: "fitContent" }} item xs={12} sm={6} md={3} lg={3}>
        <OutlinedCard cardArray={Discover} title={"Discover"} />
      </Grid>
      <Grid sx={{ height: "fitContent" }} item xs={12} sm={6} md={3} lg={3}>
        <OutlinedCard cardArray={Legal} title={"Legal"} />
      </Grid>
      <Grid sx={{ height: "fitContent" }} item xs={12} sm={6} md={3} lg={3}>
        <OutlinedCard cardArray={Help} title={"Help"} />
      </Grid>
      <Grid sx={{ height: "fitContent" }} item xs={12} sm={6} md={3} lg={3}>
        <OutlinedCard
          cardArray={TakeDeliveroowithyou}
          title={"Take Deliveroo with you"}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction={"row"} spacing={2}>
          {/* Icon Stack */}
          <FacebookRoundedIcon
            sx={{
              fontSize: "24px",
              color: "#fff",
              "&:hover": { color: "#1877F2" },
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: "24px",
              color: "#fff",
              "&:hover": { color: "#1DA1F2" },
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "24px",
              color: "#fff",
              "&:hover": { color: "#ee2a7b" },
            }}
          />
        </Stack>
        <Typography variant="body1" sx={{ color: "#585c5c", fontSize: "14px" }}>
          ©️ 2024 Deliveroo
        </Typography>
      </Grid>
    </Grid>
  </Stack>
);

export default Footer;
