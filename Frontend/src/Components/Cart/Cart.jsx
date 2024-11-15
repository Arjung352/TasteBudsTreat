import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";

const dishData = [
  {
    id: 1,
    img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg",
    name: "Spaghetti Carbonara",
    price: 12,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://th.bing.com/th/id/OIP.8No7LgYczYc66dDgftC_BwHaE8?w=291&h=194&c=7&r=0&o=5&pid=1.7",
    name: "Margherita Pizza",
    price: 10,
    quantity: 1,
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(dishData);

  // quantity change
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.min(10, Math.max(1, item.quantity + delta)),
            }
          : item
      )
    );
  };

  // item removal
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="my-12 w-full max-w-5xl rounded-lg shadow-2xl bg-white/80 backdrop-blur-lg p-8">
        <p className="text-4xl font-bold mb-8 text-center text-gray-800">
          Shopping Cart
        </p>

        <Grid container spacing={4} className="mb-8">
          <Grid item xs={2} className="text-center font-semibold">
            Remove
          </Grid>
          <Grid item xs={4} className="font-semibold">
            Product
          </Grid>
          <Grid item xs={2} className="text-center font-semibold">
            Price
          </Grid>
          <Grid item xs={2} className="text-center font-semibold">
            Quantity
          </Grid>
          <Grid item xs={2} className="text-center font-semibold">
            Total
          </Grid>
        </Grid>

        {cartItems.map((item) => (
          <Grid
            container
            spacing={4}
            key={item.id}
            className="items-center border-b py-4"
          >
            {/* Remove btn */}
            <Grid item xs={2} className="flex justify-center">
              <IconButton onClick={() => handleRemoveItem(item.id)}>
                <CloseIcon className="text-gray-500 hover:text-red-600" />
              </IconButton>
            </Grid>

            {/* Product Info */}
            <Grid item xs={4} className="flex items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover mr-4"
              />
              <span className="font-medium text-gray-800">{item.name}</span>
            </Grid>

            {/* Price */}
            <Grid item xs={2} className="text-center font-medium text-gray-800">
              ${item.price.toFixed(2)}
            </Grid>

            {/* Quantity Controls */}
            <Grid item xs={2} className="flex justify-center items-center">
              <IconButton
                onClick={() => handleQuantityChange(item.id, -1)}
                disabled={item.quantity === 1}
              >
                <RemoveIcon className="text-gray-500" />
              </IconButton>
              <span className="mx-2 font-semibold">{item.quantity}</span>
              <IconButton
                onClick={() => handleQuantityChange(item.id, 1)}
                disabled={item.quantity === 10}
              >
                <AddIcon className="text-gray-500" />
              </IconButton>
            </Grid>

            {/* Total Price */}
            <Grid item xs={2} className="text-center font-medium text-gray-800">
              ${(item.price * item.quantity).toFixed(2)}
            </Grid>
          </Grid>
        ))}

        {/* Checkout Button and Total Price */}
        <div className="text-right mt-8">
          <p className="text-xl font-bold mb-4">
            Total: ${calculateTotalPrice().toFixed(2)}
          </p>
          <Button
            variant="contained"
            color="primary"
            className="px-6 py-3 font-semibold"
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
