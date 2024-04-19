import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/icons-material";

const CardComponent = ({ Cardarray, Title, svg }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

const OutlinedCard = ({ Cardarray, Title, svg }) => {
  return (
    <Box
      sx={{
        minWidth: 275,
        paddingBlock: "20px",
        paddingInline: "16px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "hsla(0,0%,100%,.1)",
          height: "400px",
          width: "231",
        }}
      >
        <CardComponent Cardarray={Cardarray} Title={Title} svg={svg} />
      </Card>
    </Box>
  );
};

export default OutlinedCard;
