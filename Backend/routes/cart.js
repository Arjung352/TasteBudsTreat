const express = require("express");
const router = express.Router();
const Menu = require("../Models/Menu.js");
const Cart = require("../Models/Cart.js");

// For adding multiple dishish in a cart
router.post("/AddToCart", async (req, res) => {
  try {
    const { productId, UserName, dishName, img, price } = req.body;
    const addCart = new Cart({
      productId: productId,
      Username: UserName,
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
// deleting a dish from cart
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

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting dish:", error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the dish" });
  }
});
router.delete("/clear", async (req, res) => {
  try {
    const username = req.headers.username;

    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    await Cart.deleteMany({ username });
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ message: "Failed to clear cart" });
  }
});

module.exports = router;
