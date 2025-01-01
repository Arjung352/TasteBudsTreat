import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
function Admin() {
  const [username, setUserName] = useState("");
  useEffect(() => {
    setUserName(localStorage.getItem("UserName"));
  }, []);
  return (
    <div className="h-svh">
      <Navbar />
      {username == "TasteBudsTreat" ? (
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className=" flex flex-col items-center ">
              <p className=" font-WorkSans text-4xl mt-5">Admin Dashboard</p>
              <p className=" bg-gray-300 w-full mt-4 p-4 rounded-xl text-olive text-xl font-medium ">
                Dashboard
              </p>
            </div>
            <div className="flex text-white mt-10 text-xl justify-between font-WorkSans">
              <div className="flex justify-between bg-red-500 rounded-xl w-full mr-5 p-4">
                <div>
                  <p className=" ">Total User</p>
                  <p>78</p>
                </div>
                <div className="flex items-center">
                  <PersonIcon fontSize="large" />
                </div>
              </div>
              <div className="flex justify-between bg-green-500 rounded-xl w-full mr-5 p-4">
                <div>
                  <p className=" ">Total Order Value</p>
                  <p>78</p>
                </div>
                <div className="flex items-center">
                  <CurrencyRupeeIcon fontSize="large" />
                </div>
              </div>
              <div className="flex justify-between bg-blue-500 rounded-xl w-full mr-5 p-4">
                <div>
                  <p className=" ">Order's Placed Today</p>
                  <p>78</p>
                </div>
                <div className="flex items-center">
                  <CalendarMonthIcon fontSize="large" />
                </div>
              </div>
              <div className="flex justify-between bg-yellow-500 rounded-xl w-full p-4">
                <div>
                  <p className=" ">Today's Order Value</p>
                  <p>78</p>
                </div>
                <div className="flex items-center">
                  <BarChartIcon fontSize="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center h-full py-8 flex flex-col justify-center items-center">
          <img
            src="https://ps.w.org/admin-only-dashboard/assets/icon-256x256.png?rev=3074610"
            className="h-36 w-36 md:h-44 md:w-44 rounded-xl bg-blend-multiply"
            alt="Authorize person only image"
          />
        </div>
      )}
    </div>
  );
}

export default Admin;
