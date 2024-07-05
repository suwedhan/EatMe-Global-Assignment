import React from "react";
import TossedImg from "../assets/images/TossedImg.png";
import { Button, IconButton, Box, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TossedImage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box position="relative" width="100%">
      {isMobile && (
        <IconButton
          aria-label="back"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 1,
            backgroundColor: "white",
            color: "#00ccbc",
          }}
        >
          <ArrowBackIcon color="#00ccbc" />
        </IconButton>
      )}
      {isMdOrSmaller && (
        <Button
          disableRipple
          variant="contained"
          startIcon={<GroupOutlinedIcon sx={{ color: "#00ccbc" }} />}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            zIndex: 1,
            color: "black",
            backgroundColor: "#fff",
            boxShadow: "none",
            border: "#DCDCDC",
            borderWidth: "0.5px",
            borderStyle: "solid",
            textTransform: "none",
            fontWeight: 400,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#fff",
              boxShadow: "0px 0px 0px 0.5px #B6B6B6",
              border: "black",
            },
          }}
        >
          Start group order
        </Button>
      )}
      <img
        src={TossedImg}
        alt="burgerpic"
        style={{ width: "100%", height: "100%", objectFit: "fill" }}
      />
    </Box>
  );
}
