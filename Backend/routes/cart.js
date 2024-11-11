// const express = require("express");
// const { getCart, addOrUpdateItem, removeItem } = require("../controllers/cartController");
// const router = express.Router();
// router.get("/:userId", getCart);
// router.post("/add", addOrUpdateItem);
// router.post("/remove", removeItem);

// module.exports = router;



// Controller 
// const Cart = require("../models/Cart");

// Get Cart Items for a Specific User
// exports.getCart = async (req, res) => {
//   const { userId } = req.params;
//   try {
//     const cart = await Cart.findOne({ userId });
//     if (!cart) return res.status(200).json({ items: [] });
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Add or Update Cart Item
// exports.addOrUpdateItem = async (req, res) => {
//   const { userId, item } = req.body;
//   try {
//     let cart = await Cart.findOne({ userId });
//     if (!cart) {
//       cart = new Cart({ userId, items: [item] });
//     } else {
//       const existingItemIndex = cart.items.findIndex(
//         (i) => i.productId === item.productId
//       );
//       if (existingItemIndex > -1) {
//         cart.items[existingItemIndex].quantity += item.quantity;
//       } else {
//         cart.items.push(item);
//       }
//     }
//     await cart.save();
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Remove Item from Cart
// exports.removeItem = async (req, res) => {
//   const { userId, productId } = req.body;
//   try {
//     const cart = await Cart.findOne({ userId });
//     if (cart) {
//       cart.items = cart.items.filter((item) => item.productId !== productId);
//       await cart.save();
//     }
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
