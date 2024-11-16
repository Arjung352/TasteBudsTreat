import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";

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

  const handleRemoveItem = async (_id) => {
    try {
      await axios.delete("http://localhost:5000/api/cart/delete", {
        data: { _id }, // Include _id in the request body
      });
      toast.success("Item Deleted Successfully");
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
    } catch (error) {
      toast.error("Error deleting item");
      console.error(error);
    }
  };

  const calculateTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // for using order now option and ordering only 1 dish
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const username = localStorage.getItem("UserName");

        if (!username) {
          console.error("No username found in localStorage");
          return;
        }

        const response = await axios.get(
          "http://localhost:5000/api/cart/show-cart",
          {
            headers: {
              username: username,
            },
          }
        );

        console.log("Cart Items API Response:", response.data);

        setCartItems(response.data.data || []);
      } catch (error) {
        console.error(
          "Error fetching cart items:",
          error.response?.data || error.message
        );
        setCartItems([]);
      }
    };

    fetchCart();
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
        {cartItems.length === 0 ? (
          <div className="text-center py-8 flex flex-col items-center">
            <p className="text-2xl font-medium text-gray-500">
              Your cart is empty.
            </p>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png"
              alt="Cart Empty"
              className=" h-44 w-44"
            />
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <Grid
                container
                spacing={4}
                key={item._id}
                className="items-center border-b py-4"
              >
                {/* Remove Item */}
                <Grid item xs={2} className="flex justify-center">
                  <IconButton onClick={() => handleRemoveItem(item._id)}>
                    <CloseIcon className="text-gray-500 hover:text-red-600" />
                  </IconButton>
                </Grid>

                {/* Item Image and Name */}
                <Grid item xs={4} className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.dishName || "Dish"}
                    className="w-20 h-20 rounded-lg object-cover mr-4"
                  />
                  <span className="font-medium text-gray-800">
                    {item.dishName || "Unnamed Dish"}
                  </span>
                </Grid>

                {/* Price Per Unit */}
                <Grid
                  item
                  xs={2}
                  className="text-center font-medium text-gray-800"
                >
                  ₹{item.price?.toFixed(2) || "0.00"}
                </Grid>

                {/* Quantity Adjuster */}
                <Grid item xs={2} className="flex justify-center items-center">
                  <IconButton
                    onClick={() => handleQuantityChange(item._id, -1)}
                    disabled={item.quantity <= 1}
                  >
                    <RemoveIcon className="text-gray-500" />
                  </IconButton>
                  <span className="mx-2 font-semibold">
                    {item.quantity || 1}
                  </span>
                  <IconButton
                    onClick={() => handleQuantityChange(item._id, 1)}
                    disabled={item.quantity >= 10}
                  >
                    <AddIcon className="text-gray-500" />
                  </IconButton>
                </Grid>

                {/* Total Price for Item */}
                <Grid
                  item
                  xs={2}
                  className="text-center font-medium text-gray-800"
                >
                  ₹{(item.price * item.quantity)?.toFixed(2) || "0.00"}
                </Grid>
              </Grid>
            ))}

            {/* Total Price and Checkout Button */}
            <div className="text-right mt-8">
              <p className="text-xl font-bold mb-4">
                Total: ₹{calculateTotalPrice()?.toFixed(2) || "0.00"}
              </p>
              <Button
                variant="contained"
                color="primary"
                className="px-6 py-3 font-semibold"
                // onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Cart;
