import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Error";
import { lazy, Suspense } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";

const Home = lazy(() => import("../Home/Home"));
const Menu = lazy(() => import("../Menu/Menu"));
const Admin = lazy(() => import("../Admin/Admin"));
const Cart = lazy(() => import("../Cart/Cart"));
const About = lazy(() => import("../AboutMe/About"));
const ContactUs = lazy(() => import("../ContactUs/ContactUs"));
const Register_Restaurant = lazy(() =>
  import("../Admin/Restaurant/Register_Restaurant")
);
const MenuForm = lazy(() => import("../Admin/Restaurant/Menu"));
function App() {
  const [load, loadingServer] = useState(false);
  useEffect(() => {
    const loadServer = (async () => {
      await axios.get(
        "https://taste-buds-treat-backend.vercel.app/api/restaurant/get-all"
      );
      loadingServer(true);
    })();
  }),
    [];
  return (
    <>
      {load ? (
        <Suspense
          fallback={
            <div className="w-full h-screen flex justify-center items-center">
              <TailSpin
                height="80"
                width="80"
                color="#3f66dd"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }
        >
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/About" element={<About />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Contact-Us" element={<ContactUs />} />
              <Route path="/Admin" element={<Admin />} />
              <Route
                path="/Register-restaurant"
                element={<Register_Restaurant />}
              />
              <Route path="/Register-menu" element={<MenuForm />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      ) : (
        <div className="w-full h-screen flex gap-4 flex-col justify-center items-center">
          <TailSpin
            height="80"
            width="80"
            color="#3f66dd"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
}

export default App;
