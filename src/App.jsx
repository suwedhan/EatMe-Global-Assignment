import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Menupage from "./pages/Menupage";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import Authloginpage from "./pages/Authlandingpage";
import Loginpage from "./pages/Authloginpage";
import Authforgotpasspage from "./pages/Authforgotpasspage";
import Authregisterpage from "./pages/Authregisterpage";
import { Container } from "@mui/material";

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
      <BrowserRouter>
        <Routes>
          <Route index element={<Landingpage />}></Route>
          <Route path="/auth" element={<Authloginpage />} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/auth/login" element={<Loginpage />} />
          <Route path="/auth/register" element={<Authregisterpage />} />
          <Route path="/auth/forgot" element={<Authforgotpasspage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}
export default App;
