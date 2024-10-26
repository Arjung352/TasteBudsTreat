import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Recipies from "../Recipies/Recipies";
import About from "../AboutMe/About";
import Cart from "../Cart/Cart";
import Error from "./Error";
import ContactUs from "../ContactUs/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="recipies" element={<Recipies />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="Contact-Us" element={<ContactUs />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
