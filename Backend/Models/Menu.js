const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  dishName: { type: String, required: true },
  category: {
    type: String,
    required: true,
  },
  foodType: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Menu", menuSchema);
