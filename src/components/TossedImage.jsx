import React from "react";
import TossedImg from "../assets/TossedImg.png";
import { Button, IconButton, Box, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TossedImage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Box position="relative" display="inline-block">
        {isMobile && (
          <IconButton
            aria-label="back"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              zIndex: 1,
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        {isMdOrSmaller && (
          <Button
            variant="contained"
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              zIndex: 1,
            }}
          >
            Boxed Button
          </Button>
        )}
        <img
          src={TossedImg}
          alt="burgerpic"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Container>
  );
}
