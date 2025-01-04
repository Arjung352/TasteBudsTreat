import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import axios from "axios";
import Footer from "../Footer/Footer";
import RecentOrder from "./RecentOrder/RecentOrder";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function Admin() {
  const [username, setUserName] = useState("");
  const [dashboardData, setdashboardData] = useState({
    totalUser: 0,
    totalOrderValue: 0,
    orderPlaceToday: 0,
    todayOrderValue: 0,
  });
  const [recentOrder, SetRecentOrder] = useState([]);
  const [dateData, setDateData] = useState([{ date: "", totalCost: 0 }]);
  useEffect(() => {
    setUserName(localStorage.getItem("UserName"));
    const today = new Date().toISOString().split("T")[0];
    let totalOrderValue = 0;
    let todaysOrderValue = 0;
    let ordersPlacedToday = 0;

    const fetchData = async () => {
      try {
        // Fetch user data
        const response = await axios.get(
          "https://taste-buds-treat-backend.vercel.app/api/dashboard/get-user"
        );
        const data = response.data.data;

        const allOrders = data.flatMap((user) =>
          user.orderHistory.map((order) => ({
            ...order,
            username: user.userName,
          }))
        );

        // Aggregate totals
        allOrders.forEach((order) => {
          totalOrderValue += order.totalCost;
          const orderDate = order.purchasedAt.split("T")[0];
          if (orderDate === today) {
            todaysOrderValue += order.totalCost;
            ordersPlacedToday++;
          }
        });

        const todayOrders = allOrders.filter((order) => {
          const orderDate = new Date(order.purchasedAt)
            .toISOString()
            .split("T")[0];
          return orderDate === today;
        });
        console.log(todayOrders);
        const allProducts = todayOrders.flatMap((order) =>
          order.products.map((product) => {
            const orderDate = new Date(order.purchasedAt);
            return {
              Item: product.dishName,
              Img: product.image,
              Date: orderDate.toISOString().split("T")[0],
              Username: order.username,
              price: product.price,
            };
          })
        );

        console.log("All Products:", allProducts);

        SetRecentOrder(allProducts);

        // Update dashboard data
        setdashboardData({
          totalUser: data.length,
          totalOrderValue,
          orderPlaceToday: ordersPlacedToday,
          todayOrderValue: todaysOrderValue,
        });

        // Create date data
        const dateMap = {};
        data.forEach((user) => {
          user.orderHistory.forEach((order) => {
            const date = new Date(order.purchasedAt)
              .toISOString()
              .split("T")[0];
            dateMap[date] = (dateMap[date] || 0) + order.totalCost;
          });
        });

        const newDateData = [];
        for (let i = 1; i <= 11; i++) {
          const date = new Date(2025, 0, i).toISOString().split("T")[0];
          newDateData.push({
            date,
            totalCost: dateMap[date] || 0,
          });
        }
        setDateData(newDateData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="relative">
      <Navbar />
      {username == "TasteBudsTreat" ? (
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className=" flex flex-col items-center ">
              <p className=" font-WorkSans text-4xl mt-5">Admin Dashboard</p>
              <p className="backdrop-filter shadow-xl bg-gray-400 backdrop-blur-md bg-opacity-10 w-full mt-4 p-4 rounded-xl text-black text-2xl font-medium ">
                Dashboard
              </p>
            </div>
            <div className=" grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-white mt-10 text-xl font-WorkSans">
              <div
                title="Total User"
                className="flex justify-between backdrop-filter  hover:scale-105 ease-in-out transition-all cursor-pointer bg-gray-400 backdrop-blur-md bg-opacity-10 text-black shadow-xl rounded-xl w-full mr-5 p-4"
              >
                <div className="flex flex-col justify-between">
                  <p className=" font-medium">Total User</p>
                  <p className="text-green-500">{dashboardData.totalUser}</p>
                </div>
                <div className="flex items-center">
                  <PersonIcon fontSize="large" />
                </div>
              </div>
              <div
                title="Total Order Value"
                className="flex justify-between backdrop-filter  hover:scale-105 ease-in-out transition-all cursor-pointer bg-gray-400 backdrop-blur-md bg-opacity-10 text-black shadow-xl rounded-xl w-full mr-5 p-4"
              >
                <div className="flex flex-col justify-between">
                  <p className=" font-medium">Total Order Value</p>
                  <p className="text-green-500">
                    {dashboardData.totalOrderValue}
                  </p>
                </div>
                <div className="flex items-center">
                  <CurrencyRupeeIcon fontSize="large" />
                </div>
              </div>
              <div
                title="Order's Placed Today"
                className="flex justify-between backdrop-filter  hover:scale-105 ease-in-out transition-all cursor-pointer bg-gray-400 backdrop-blur-md bg-opacity-10 text-black shadow-xl rounded-xl w-full mr-5 p-4"
              >
                <div className="flex flex-col justify-between">
                  <p className=" font-medium">Order's Placed Today</p>
                  <p className="text-green-500">
                    {dashboardData.orderPlaceToday}
                  </p>
                </div>
                <div className="flex items-center">
                  <CalendarMonthIcon fontSize="large" />
                </div>
              </div>
              <div
                title="Today's Order Value"
                className="flex justify-between backdrop-filter  hover:scale-105 ease-in-out transition-all cursor-pointer bg-gray-400 backdrop-blur-md bg-opacity-10 text-black shadow-xl rounded-xl w-full p-4"
              >
                <div className="flex flex-col justify-between">
                  <p className=" font-medium">Today's Order Value</p>
                  <p className="text-green-500">
                    {dashboardData.todayOrderValue}
                  </p>
                </div>
                <div className="flex items-center">
                  <BarChartIcon fontSize="large" />
                </div>
              </div>
            </div>
            {/* Visual representation of every day total order */}
            <div className="flex flex-col mt-10 gap-10">
              <p className="text-center font-WorkSans text-2xl font-medium">
                Every Day's Total Order Value
              </p>
              <div className="flex max-xl:flex-col max-xl:gap-7 mb-16 items-center">
                <div
                  title="Line Chart Representing Order Value"
                  className="w-full xl:max-w-screen-sm text-green-500 h-80"
                >
                  <Line
                    data={{
                      labels: dateData.map((entry) => entry.date),
                      datasets: [
                        {
                          label: "Order Value",
                          data: dateData.map((entry) => entry.totalCost),
                          backgroundColor: "rgba(6, 79, 240, 0.2)",
                          borderColor: "#064FF0",
                          borderWidth: 2,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      elements: {
                        line: {
                          tension: 0.5,
                        },
                      },
                      plugins: {
                        title: {
                          text: "Line Chart",
                          color: "#22c55e",
                        },
                      },
                    }}
                  />
                </div>
                <div
                  title="Pie Chart Representing Order Value"
                  className="w-full xl:max-w-screen-sm h-80"
                >
                  <Doughnut
                    data={{
                      labels: dateData.slice(0, 11).map((entry) => entry.date),
                      datasets: [
                        {
                          label: "Order Value",
                          data: dateData
                            .slice(0, 11)
                            .map((entry) => entry.totalCost),
                          backgroundColor: dateData
                            .slice(0, 11)
                            .map(
                              () =>
                                `rgba(${Math.floor(
                                  Math.random() * 256
                                )}, ${Math.floor(
                                  Math.random() * 256
                                )}, ${Math.floor(Math.random() * 256)}, 0.8)`
                            ), // Random colors for each day
                          borderColor: "rgba(0,0,0,0.5)",
                          borderWidth: 2,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      elements: {
                        line: {
                          tension: 0.5,
                        },
                      },
                      plugins: {
                        title: {
                          display: true,
                          text: "Pie Chart",
                          color: "#22c55e",
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Recent order's */}
            <RecentOrder recentOrder={recentOrder} />
            <Footer />
          </div>
        </div>
      ) : (
        <div className="text-center h-svh py-8 flex flex-col justify-center items-center">
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
