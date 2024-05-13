import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/icons-material";

const CardComponent = ({ Cardarray, Title, svg }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

const OutlinedCard = ({ Cardarray, Title, svg }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "hsla(0,0%,100%,.1)",
        height: "400px",
        minWidth: 250,
      }}
    >
      {/* <CardComponent Cardarray={Cardarray} Title={Title} svg={svg} /> */}

      <CardContent>
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
    </Card>
  );
};

export default OutlinedCard;
