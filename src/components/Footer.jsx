import React from "react";
import { CardContent, Typography, Grid, Stack, Box } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Downloadios from "./Downloadios";
import Downloadplay from "./Downloadplay";

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
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
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
  <Box
    sx={{
      width: "100%",
      backgroundColor: "#2e3333",
      px: { xs: 2, sm: 5, md: 10 },
      py: 4,
      boxSizing: "border-box",
    }}
  >
    <Grid container spacing={2} alignItems="stretch">
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        display="flex"
        sx={{
          width: { xs: "100%", md: "75%" }, // Full width on small screens, reduced width on desktop
        }}
      >
        <OutlinedCard cardArray={Discover} title={"Discover"} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        display="flex"
        sx={{
          width: { xs: "100%", md: "75%" }, // Full width on small screens, reduced width on desktop
        }}
      >
        <OutlinedCard cardArray={Legal} title={"Legal"} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        display="flex"
        sx={{
          width: { xs: "100%", md: "75%" }, // Full width on small screens, reduced width on desktop
        }}
      >
        <OutlinedCard cardArray={Help} title={"Help"} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        display="flex"
        sx={{
          width: { xs: "100%", md: "75%" }, // Full width on small screens, reduced width on desktop
        }}
      >
        <OutlinedCard
          cardArray={TakeDeliveroowithyou}
          title={"Take Deliveroo with you"}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          flexWrap: "wrap", // Ensure that the content wraps on small screens
        }}
      >
        <Stack direction="row" spacing={2}>
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
  </Box>
);

export default Footer;
