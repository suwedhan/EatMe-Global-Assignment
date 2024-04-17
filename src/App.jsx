import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';

//Custom theme to change font globally 
const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    fontWeightLight:'bold',


  }
});

function App() {
  return (
    <ThemeProvider theme={theme}> { 
      <div className="App">
        <Header />
        <Footer/>
      </div>} 
    </ThemeProvider>
  );

}
export default App;
