import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import JoinUs from "./Pages/JoinUs/JoinUs";
import Payment from "./Pages/Payment/Payment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Gear from "./Pages/Gear/Gear";
import Blog from "./Pages/Blog/Blog";
import SingleBlog from "./Pages/Blog/SingleBlog";
import Donate from "./Pages/Donate/Donate";
import SilentAuction from "./Pages/SilentAuction/SilentAuction";
import VolunteerPage from "./Pages/Volunteer/VolunteerPage";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <PayPalScriptProvider
          options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
        >
          <div className="App">
            <Navbar />

            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/aboutUs" element={<AboutUs />}></Route>
              <Route path="/joinUs" element={<JoinUs />}></Route>
              <Route path="/payments" element={<Payment />}></Route>
              <Route path="/gear" element={<Gear />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/bhcl_blog" element={<SingleBlog />}></Route>
              <Route path="/donate" element={<Donate />}></Route>
              <Route path="/SilentAuction" element={<SilentAuction />}></Route>
              <Route path="/volunteering" element={<VolunteerPage />}></Route>
              
            </Routes>
            <Footer />
          </div>
        </PayPalScriptProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
