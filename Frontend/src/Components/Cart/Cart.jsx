import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import PaymentSuccess from "../PaymentSuccess/PaymentSuccess";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to show PaymentSuccess
  const { id } = useParams();

  // Handle quantity changes
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

  // Remove an item from the cart
  const handleRemoveItem = async (_id) => {
    try {
      await axios.delete("http://localhost:5000/api/cart/delete", {
        data: { _id },
      });
      toast.success("Item Deleted Successfully");
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
    } catch (error) {
      toast.error("Error deleting item");
      console.error(error);
    }
  };

  // Calculate total price
  const calculateTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Fetch cart items
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

        setCartItems(response.data.data || []);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setCartItems([]);
      }
    };

    fetchCart();
  }, [id]);

  // Checkout handler
  // Checkout handler
  const handleCheckout = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/checkout", {
        amount: calculateTotalPrice(),
      });

      const options = {
        key: "rzp_test_o97y5FAmkmAX8b", // Your Razorpay key
        amount: data.order.amount,
        currency: "INR",
        name: "TasteBudsTreat",
        description: "Payment for your delicious food!",
        order_id: data.order.id,
        handler: function (response) {
          axios
            .post("http://localhost:5000/paymentverification", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            })
            .then(async (res) => {
              if (res.data.success) {
                toast.success("Payment Successful!");

                // Clear cart from database
                try {
                  await axios.delete("http://localhost:5000/api/cart/clear", {
                    headers: {
                      username: localStorage.getItem("UserName"),
                    },
                  });

                  setCartItems([]);
                  setPaymentSuccess(true); // Show PaymentSuccess page
                } catch (clearError) {
                  toast.error("Failed to clear cart. Please try again.");
                  console.error("Error clearing cart:", clearError);
                }
              } else {
                toast.error("Payment Verification Failed.");
              }
            })
            .catch((error) => {
              console.error("Payment verification error:", error);
              toast.error("Payment verification failed. Please try again.");
            });
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "+919876543210",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error("Something went wrong while initiating checkout.");
    }
  };

  // Render PaymentSuccess if payment is successful
  if (paymentSuccess) {
    return <PaymentSuccess />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 p-6">
      <div className="my-12 w-full max-w-5xl rounded-xl shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-5 border border-gray-100 bg-gray-400 p-8">
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
              className="h-44 w-44"
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

                {/* Total Price */}
                <Grid
                  item
                  xs={2}
                  className="text-center font-medium text-gray-800"
                >
                  ₹{(item.price * item.quantity).toFixed(2) || "0.00"}
                </Grid>
              </Grid>
            ))}
          </>
        )}

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <div className="flex justify-between mt-8">
            <p className="text-2xl font-semibold text-gray-800">
              Total: ₹{calculateTotalPrice().toFixed(2)}
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Cart;
