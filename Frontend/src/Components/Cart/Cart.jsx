import React from "react";
import dish from "../Home/Card/name";
import CloseIcon from "@mui/icons-material/Close";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Cart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <header className="w-full flex justify-end p-4 shadow-md rounded-lg bg-opacity-90">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-5 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-lg font-semibold shadow-md transition duration-300 transform hover:scale-105">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      
      <SignedIn>
        <div className="my-12 w-full max-w-4xl rounded-lg shadow-2xl bg-white/80 backdrop-blur-lg p-8">
          <p className="text-4xl font-bold mb-8 text-center text-gray-800">Shopping Cart</p>
          <div className="w-full space-y-4">
            <div className="flex justify-between text-gray-700 font-semibold text-lg border-b pb-2">
              <div className="w-1/5 text-center">Remove</div>
              <div className="w-1/3">Product</div>
              <div className="w-1/5 text-center">Price</div>
              <div className="w-1/5 text-center">Quantity</div>
              <div className="w-1/5 text-center">Total</div>
            </div>

            <div className="flex justify-between items-center mt-4 border-b border-gray-200 py-6">
              <div className="w-1/5 flex justify-center">
                <CloseIcon className="text-gray-400 cursor-pointer hover:text-red-500 transition duration-200" />
              </div>
              <div className="w-1/3 flex items-center">
                <img src={dish[0].img} alt="Dish" className="w-20 h-20 rounded-lg shadow-lg object-cover" />
                <span className="ml-6 font-medium text-gray-800 text-lg">Dish Name</span>
              </div>
              <div className="w-1/5 text-center font-medium text-gray-800">$Price</div>
              <div className="w-1/5 text-center font-medium text-gray-800">Quantity</div>
              <div className="w-1/5 text-center font-medium text-gray-800">$Total</div>
            </div>
            
            <div className="text-right mt-8">
              <button className="px-8 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 font-semibold transition duration-300 transform hover:scale-105">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </SignedIn>
      
      <SignedOut>
        <p className="text-2xl font-semibold text-gray-700 mt-12">
          Oops you are not sign in .
        </p>
      </SignedOut>
    </div>
  );
}

export default Cart;
