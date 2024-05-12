import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import OutlinedCard from "./Components/Maincard";
import LabelButton from "./Components/LabelButton";
import Registration from "./Components/Registration";
import Login from "./Components/Registration";
import Register from "./Components/Register";

import MenuHeader from "./Components/MenuHeader";
import Scrollnav from "./Components/Scrollnav";
import Displayitem from "./Components/Displayitem";
import { Card } from "@mui/material";
import Maincard from "./Components/Maincard";

//Custom theme to change font globally
const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    fontWeightLight: "bold",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      {
        <>
          <Maincard />
        </>
      }
    </ThemeProvider>
  );
}
export default App;
