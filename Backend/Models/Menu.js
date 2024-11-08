const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
  restaurantName: { type: String, required: true },
  dishName: { type: String, required: true },
  category: { type: String, enum: ["Starter", "Main Course", "Dessert", "Beverage","Others"], required: true },
  foodType: { type: String, enum: ["Veg", "Non-Veg"], required: true },
  image: { type: String, required: false },
  price: { type: Number, required: true },
  rating: { type: Number, required: false },
  description: { type: String, required: true }
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
