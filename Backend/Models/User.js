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
    img: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
    },
    orderHistory: {
      type: [
        {
          products: [
            {
              productId: {
                type: String,
                required: true,
              },
              dishName: {
                type: String,
                required: true,
              },
              image: {
                type: String,
                required: true,
              },
              price: {
                type: Number,
                required: true,
              },
            },
          ],
          totalCost: {
            type: Number,
            required: true,
          },
          purchasedAt: {
            type: Date,
            required: true,
          },
        },
      ],
      default: [],
    },
    totalSpend: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
