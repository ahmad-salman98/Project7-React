import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./theme"
import { ThemeProvider } from "@mui/material";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hotels from "./components/Hotels/Hotels";
import SignIn from "./components/signin-up/SignIn";
import SignUp from "./components/signin-up/SignUp";

function App() {
  return (<>
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/hotels' element={<Hotels />} />
          <Route exact path='/login' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
  );

}


export default App;
