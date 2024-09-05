import React from "react";
import dish from "../Home/Card/name";
import CloseIcon from "@mui/icons-material/Close";
function Cart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-4 text-2xl">Shopping Cart</p>
      <div className="w-full p-4">
        <div className="flex w-full justify-between">
          <div className="w-1/3"></div>
          <div className="w-2/3">Product</div>
          <div className="w-1/3">Price</div>
          <div className="w-1/3">Quantity</div>
          <div className="w-1/3">Total</div>
        </div>
        <div className="flex w-full justify-between mt-2 border-black border-y-2">
          <div className="w-1/3 flex justify-center">
            <CloseIcon />
          </div>
          <div className="w-2/3">
            <img src={dish[0].img} alt="Dish" className="" />
          </div>
          <div className="w-1/3">Price</div>
          <div className="w-1/3">Quantity</div>
          <div className="w-1/3">Total</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
