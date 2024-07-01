import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WindowResize from "../hooks/WindowResize";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Container, Stack } from "@mui/material";

const card = (
  <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
    {" "}
    {/* Center both content and icon horizontally */}
    <CardContent
      sx={{
        height: "480px",
        margin: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {" "}
      {/* Added display: flex and alignItems */}
      <Stack sx={{ alignItems: "center" }}>
        {" "}
        {/* Center icon and text horizontally within the flex container */}
        <ShoppingBasketOutlinedIcon
          sx={{ fontSize: "50px", color: "#abadad" }}
        />
        <Typography
          sx={{ fontSize: 16, fontWeight: "500" }}
          color="#abadad;"
          gutterBottom
        >
          Your basket is empty
        </Typography>
      </Stack>
    </CardContent>
    <CardActions>
      <Button
        variant="outlined"
        disableRipple
        // disabled

        sx={{
          cursor: "not-allowed",
          textTransform: "none",
          width: "400px",
          height: "48px",
          color: "#abadad",
          borderColor: "#abadad",
          border: "none",
          background: "#e2e5e5",
          marginBottom: "10px",

          "&:hover": {
            color: "#abadad",
            border: "none",
            background: "#e2e5e5",
          },
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Go to checkout</Typography>
      </Button>
    </CardActions>
  </Stack>
);

export default function Basketcard() {
  const { width } = WindowResize();
  return (
    <Container
      sx={{ minWidth: 418, display: width < 960 ? "none" : "inherit" }}
    >
      <Card
        variant="outlined"
        sx={{ width: "420px", marginRight: "200px", marginTop: "200px" }}
      >
        {card}
      </Card>
    </Container>
  );
}
