import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Outlinedcard from "./OutlineCard";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Downloadios from "./Downloadios";
import Downloadplay from "./Downloadplay";

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
    <Stack
      direction="column"
      sx={{
        backgroundColor: "#2e3333",
      }}
      justifyContent="center"
    >
      <Stack
        direction="row"
        spacing={-2}
        sx={{
          justifyItems: "center",
          display: "flex",
          margin: "0 auto",
          marginBottom: "4px",
        }}
      >
        <Outlinedcard Cardarray={Discover} Title={"Discover Deliveroo"} />
        <Outlinedcard Cardarray={Legal} Title={"Legal"} />
        <Outlinedcard Cardarray={Help} Title={"Help"} />
        <Outlinedcard
          Cardarray={TakeDeliveroowithyou}
          Title={"Take Deliveroo with you"}
          svg={true}
        />
      </Stack>

      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          color: "#fff",
          marginBottom: "5px",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          marginLeft={"150px"}
          sx={{ flexGrow: 1, marginBottom: "20px" }}
        >
          {/* Parent Stack with flex-grow */}
          {/* Icon Stack */}
          <FacebookRoundedIcon
            sx={{ fontSize: "24px", "&:hover": { color: "#1877F2	" } }}
          />
          <TwitterIcon
            sx={{ fontSize: "24px", "&:hover": { color: "#1DA1F2	" } }}
          />
          <InstagramIcon
            sx={{ fontSize: "24px", "&:hover": { color: "#ee2a7b	" } }}
          />

          <Stack>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#585c5c",
                marginLeft: "910px",
              }}
            >
              © 2024 Deliveroo
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
