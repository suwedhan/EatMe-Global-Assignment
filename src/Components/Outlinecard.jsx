import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardComponent = ({ Cardarray }) => {
  return (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontWeight: "bold", color: "#fff", textAlign:"left" }}>Discover Deliveroo</Typography>
        {Cardarray?.map((item, index) => (
          <Typography key={index} sx={{ color: "#fff" ,textAlign:"left" }} >{item}</Typography>
        ))}
      </CardContent>
    </Fragment>
  );
}

const OutlinedCard = ({ Cardarray }) => {
  return (
    <Box sx={{
      minWidth: 275,
      paddingBlock: "20px",
      paddingInline: "16px",
    }}>
      <Card variant="outlined" sx={{ backgroundColor: "hsla(0,0%,100%,.1)" }}>
        <CardComponent Cardarray={Cardarray} />
      </Card>
    </Box>
  );
}

export default OutlinedCard;
