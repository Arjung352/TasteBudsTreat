import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();

  const handleQuantityChange = (_id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === _id
          ? {
              ...item,
              quantity: Math.min(10, Math.max(1, item.quantity + delta)),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (_id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
  };

  const calculateTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cart/dish/${id}`
        );
        console.log("API Response:", response.data);

        const dish = response.data;
        setCartItems([{ ...dish, quantity: 1 }]);
      } catch (error) {
        console.error("Error fetching cart item:", error);
        setCartItems([]);
      }
    };
    fetch();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 p-6">
      <div className="my-12 w-full max-w-5xl rounded-xl shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-5 border border-gray-100 bg-gray-400  p-8">
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
            key={item._id}
            className="items-center border-b py-4"
          >
            <Grid item xs={2} className="flex justify-center">
              <IconButton onClick={() => handleRemoveItem(item._id)}>
                <CloseIcon className="text-gray-500 hover:text-red-600" />
              </IconButton>
            </Grid>

            <Grid item xs={4} className="flex items-center">
              <img
                src={item.image}
                alt={item.dishName}
                className="w-20 h-20 rounded-lg object-cover mr-4"
              />
              <span className="font-medium text-gray-800">{item.dishName}</span>
            </Grid>

            <Grid item xs={2} className="text-center font-medium text-gray-800">
              ${item.price.toFixed(2)}
            </Grid>

            <Grid item xs={2} className="flex justify-center items-center">
              <IconButton
                onClick={() => handleQuantityChange(item._id, -1)}
                disabled={item.quantity === 1}
              >
                <RemoveIcon className="text-gray-500" />
              </IconButton>
              <span className="mx-2 font-semibold">{item.quantity}</span>
              <IconButton
                onClick={() => handleQuantityChange(item._id, 1)}
                disabled={item.quantity === 10}
              >
                <AddIcon className="text-gray-500" />
              </IconButton>
            </Grid>

            <Grid item xs={2} className="text-center font-medium text-gray-800">
              ${(item.price * item.quantity).toFixed(2)}
            </Grid>
          </Grid>
        ))}

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
