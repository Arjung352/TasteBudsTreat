const express = require("express");
const router = express.Router();
const Cart = require("../Models/Cart.js");

// For adding multiple dishish in a cart
// Adding an item to the cart
router.post("/AddToCart", async (req, res) => {
  try {
    const username = req.header;
    const { productId, dishName, img, price } = req.body;
    const addCart = new Cart({
      productId: productId,
      Username: username,
      dishName: dishName,
      image: img,
      price: price,
    });
    await addCart.save();

    res.status(200).json({ message: "Item Added to Cart" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Deleting a dish from the cart
router.delete("/delete", async (req, res) => {
  try {
    let { _id } = req.body;

    if (!_id) {
      return res.status(400).json({ message: "Dish ID is required!" });
    }

    let findId = await Cart.findByIdAndDelete(_id);
    if (!findId) {
      return res
        .status(404)
        .json({ message: "Cannot find a dish with that ID!" });
    }
  } catch (error) {
    console.error("Error deleting dish:", error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the dish" });
  }
});

// Clearing the cart
router.delete("/clear", async (req, res) => {
  try {
    const Username = req.headers.username;

    // Validate username
    if (!Username) {
      return res.status(400).json({ message: "Username is required" });
    }

    // Delete cart items for the user
    const result = await Cart.deleteMany({ Username });
    res
      .status(200)
      .json({ success: true, message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ success: false, message: "Failed to clear cart" });
  }
});
// Fetch cart items and display according to the username
router.get("/show-cart", async (req, res) => {
  try {
    const { username } = req.headers;
    if (!username) {
      return res.status(400).json({ message: "Username header is required" });
    }
    const cartItems = await Cart.find({ Username: username });

    if (cartItems.length === 0) {
      return res
        .status(404)
        .json({ message: "No cart items found for the user" });
    }
    res.status(200).json({ data: cartItems });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
