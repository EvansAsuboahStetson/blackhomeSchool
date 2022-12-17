import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import JoinUs from "./Pages/JoinUs/JoinUs";

function App() {
  return (
     <BrowserRouter>
       <ChakraProvider theme={theme}>
      <div className="App">

      <Navbar />
     
      <Routes>
        <Route  path="/" element={<HomePage />}></Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
         <Route path="/joinUs" element={<JoinUs/>}></Route>
      </Routes>
      <Footer/>
    </div>
  

  </ChakraProvider>
     
     </BrowserRouter>

  
  );
}

export default App;
