const express = require("express");
const router = express.Router();
const Menu = require("../Models/Menu.js");
router.get("/dish/:id", async (req, res) => {
  try {
    const dishId = req.params.id;
    const dish = await Menu.findById(dishId);
    if (!dish) {
      return res.status(404).json({ message: "dish not found" });
    }
    res.status(200).json(dish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
