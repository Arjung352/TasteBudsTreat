const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
    },
    emailId: {
      type: String,
    },
    totalSpend: {
      type: Number,
      default: 0,
    },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
      },
    ],
    orderHistory: [
      {
        products: [
          {
            productId: String,
            dishName: String,
            image: String,
            price: Number,
          },
        ],
        totalCost: {
          type: Number,
        },
        purchasedAt: {
          type: Date,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
