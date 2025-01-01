import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import axios from "axios";
function Admin() {
  const [username, setUserName] = useState("");
  const [dashboardData, setdashboardData] = useState({
    totalUser: 0,
    totalOrderValue: 0,
    orderPlaceToday: 0,
    todayOrderValue: 0,
  });
  useEffect(() => {
    setUserName(localStorage.getItem("UserName"));
    const today = new Date().toISOString().split("T")[0];
    let totalOrderValue = 0;
    let todaysOrderValue = 0;
    let ordersPlacedToday = 0;
    const fetchData = (async () => {
      try {
        // Fetching the user data
        const response = await axios.get(
          "https://taste-buds-treat-backend.vercel.app/api/dashboard/get-user"
        );
        const data = response.data.data;
        data.forEach((user) => {
          user.orderHistory.forEach((order) => {
            totalOrderValue += order.totalCost;

            const orderDate = order.purchasedAt.split("T")[0];
            if (orderDate === today) {
              todaysOrderValue += order.totalCost;
              ordersPlacedToday++;
            }
          });
        });
        setdashboardData({
          totalUser: data.length,
          totalOrderValue,
          orderPlaceToday: ordersPlacedToday,
          todayOrderValue: todaysOrderValue,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    })();
  }, []);
  return (
    <div className="h-svh">
      <Navbar />
      {username == "TasteBudsTreat" ? (
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className=" flex flex-col items-center ">
              <p className=" font-WorkSans text-4xl mt-5">Admin Dashboard</p>
              <p className=" bg-gray-200 w-full mt-4 p-4 rounded-xl text-green-400 text-2xl font-medium ">
                Dashboard
              </p>
            </div>
            <div className=" grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-white mt-10 text-xl font-WorkSans">
              <div className="flex justify-between bg-red-500 rounded-xl w-full mr-5 p-4">
                <div className="flex flex-col justify-between">
                  <p className=" ">Total User</p>
                  <p>{dashboardData.totalUser}</p>
                </div>
                <div className="flex items-center">
                  <PersonIcon fontSize="large" />
                </div>
              </div>
              <div className="flex justify-between bg-green-500 rounded-xl w-full mr-5 p-4">
                <div className="flex flex-col justify-between">
                  <p className=" ">Total Order Value</p>
                  <p>{dashboardData.totalOrderValue}</p>
                </div>
                <div className="flex items-center">
                  <CurrencyRupeeIcon fontSize="large" />
                </div>
              </div>
              <div className="flex justify-between bg-blue-500 rounded-xl w-full mr-5 p-4">
                <div className="flex flex-col justify-between">
                  <p className=" ">Order's Placed Today</p>
                  <p>{dashboardData.orderPlaceToday}</p>
                </div>
                <div className="flex items-center">
                  <CalendarMonthIcon fontSize="large" />
                </div>
              </div>
              <div className="flex justify-between bg-yellow-500 rounded-xl w-full p-4">
                <div className="flex flex-col justify-between">
                  <p className=" ">Today's Order Value</p>
                  <p>{dashboardData.todayOrderValue}</p>
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
