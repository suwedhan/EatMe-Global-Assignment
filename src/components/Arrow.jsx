import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Button } from "@mui/material";

export default function ArrowButton({
  direction = "forward",
  visible = true,
  onClick,
}) {
  if (!visible) return null;

  return (
    <Button
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100px",
        bgcolor: "white",
        width: "44px",
        minWidth: "44px",
        height: "44px",
        boxShadow: "0 1px 4px #00000014",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <ArrowForwardRoundedIcon
        sx={{
          color: "#00ccbc",
          transform: direction === "back" ? "rotate(180deg)" : "none",
        }}
      />
    </Button>
  );
}
