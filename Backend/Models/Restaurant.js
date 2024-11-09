const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: false },
  rating: { type: Number, required: true },
  dish: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
    },
  ],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
