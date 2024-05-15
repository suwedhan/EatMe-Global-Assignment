import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { yellow } from "@mui/material/colors";

const OutlinedCard = ({ Cardarray, Title, svg }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={2}
      sx={{
        backgroundColor: "hsla(0,0%,100%,.1)",
        height: "100%",
        minWidth: 250,
        marginBottom: "4px",
        width: "100%",
      }}
    >
      {/* <CardComponent Cardarray={Cardarray} Title={Title} svg={svg} /> */}

      <CardContent sx={{ bgcolor: "yellow" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#fff",
            textAlign: "left",
            fontSize: "18px",
            marginBottom: "10px",
            display: "flex",
          }}
        >
          {Title}
        </Typography>

        {Cardarray?.map((item, index) => (
          <Typography
            key={index}
            sx={{
              color: "#fff",
              textAlign: "left",
              fontSize: "14px",
              fontWeight: 450,
              lineHeight: svg ? "-20px" : "28px", //
            }}
          >
            {item}
          </Typography>
        ))}
      </CardContent>
    </Grid>
  );
};

export default OutlinedCard;
