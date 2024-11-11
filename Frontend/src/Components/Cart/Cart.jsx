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
    img: "data:image/jpeg;base64,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",
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
