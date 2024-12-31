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
      default: function () {
        return this.emailId;
      },
    },
    img: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
    },
    totalSpend: {
      type: Number,
      default: 0,
    },
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
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
