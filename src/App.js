import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./theme"
import { ThemeProvider } from "@mui/material";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hotels from "./components/Hotels/Hotels";

function App() {
  return (<>
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/hotels' element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
  );

}


export default App;
