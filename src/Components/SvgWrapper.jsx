// svgWrapper.jsx
import React from "react";
import Typography from "@mui/material/Typography";

const SvgWrapper = ({ item, index }) => {
  // Check if SVG is present at index 3
  const hasSvg = index === 3;

  return (
    <Typography
      key={index}
      sx={{
        color: "#fff",
        textAlign: "left",
        fontSize: "14px",
        fontWeight: 450,
        lineHeight: 2,
      }}
    >
      {item}
      {hasSvg && <SvgWrapper />} {/* Replace with your actual SVG component */}
    </Typography>
  );
};

export default SvgWrapper;
