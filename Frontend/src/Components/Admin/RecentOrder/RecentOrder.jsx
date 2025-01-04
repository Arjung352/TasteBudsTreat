import React from "react";

function RecentOrder({ recentOrder }) {
  return (
    <div className="flex flex-col">
      <p className="text-center font-WorkSans text-2xl font-medium">
        Recent Orders
      </p>
      <div
        className="flex flex-col h-80 overflow-y-auto overflow-x-hidden my-7 gap-4 cursor-pointer"
        title="Recent Orders"
      >
        {recentOrder.map((order, index) => (
          <div
            key={index}
            className="flex justify-between items-center backdrop-filter bg-gray-400 backdrop-blur-md bg-opacity-10 rounded-xl p-2 shadow-xl border hover:scale-[1.01] transition-all ease-in-out max-sm:flex-col max-sm:gap-2"
          >
            <div className="flex items-center gap-4 max-sm:w-full max-sm:justify-between">
              <div>
                <img
                  src={order.Img}
                  alt={order.Item}
                  className="w-20 block rounded-xl h-20"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium text-green-500">
                  {order.Item}
                </p>
                <p className="text-lg">{order.Date}</p>
              </div>
            </div>
            <p className="text-lg font-medium text-green-500">
              {order.Username}
            </p>
            <p className="text-lg font-medium mr-5 max-sm:mr-0 text-green-500">
              {order.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentOrder;
