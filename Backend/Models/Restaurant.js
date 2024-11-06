const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: false }, 
  username: { type: String, required: true },
  rating: { type: Number, required: false },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
