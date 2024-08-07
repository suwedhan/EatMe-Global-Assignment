import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Categoryitemhorizontal from "./Categoryitemhorizontal";

const CategoryList = ({ title, items, href }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <a href={href} style={{ textDecoration: "none" }}>
        <Typography
          gutterBottom
          sx={{
            color: "#2e3333",
            fontSize: "22px",
            fontWeight: "800",
            marginBottom: "20px",
            marginLeft: "4vh",
          }}
        >
          {title}
        </Typography>
      </a>
      {items.map((item, index) => (
        <Categoryitemhorizontal key={index} label={item.label} />
      ))}
    </Box>
  );
};

export default CategoryList;
