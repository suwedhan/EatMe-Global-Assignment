import "./App.css";
import Footer from "./components/MainComponents/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import MenuHeader from "./components/MainComponents/MenuHeader";
import Maincard from "./components/MainComponents/Maincard";
import Basketcard from "./components/MainComponents/Basketcard";
import Categoryitem from "./components/Categoryitem";

// Custom theme to change font globally
const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    fontWeightLight: "bold",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuHeader />

      <Categoryitem />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}
export default App;
