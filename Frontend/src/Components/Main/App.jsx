import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Recipies from "../Recipies/Recipies";
import About from "../AboutMe/About";
import Signin from "../Register/Signin";
import Cart from "../Cart/Cart";
import Error from "./Error";
import Login from "../Register/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="recipies" element={<Recipies />} />
            <Route path="about" element={<About />} />
            <Route path="signin" element={<Signin />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
