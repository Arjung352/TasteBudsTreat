const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const Menu = require("../Models/Menu.js");
const Restaurant = require("../Models/Restaurant.js");
const router = express.Router();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to add a new menu item
router.post("/menu", upload.single("img"), async (req, res) => {
  try {
    let imageUrl = null;

    // If an image is uploaded, upload it to Cloudinary
    if (req.file) {
      const stream = streamifier.createReadStream(req.file.buffer);

      const uploadResult = await new Promise((resolve, reject) => {
        const cloudinaryUpload = cloudinary.uploader.upload_stream(
          {
            folder: "restaurants",
            resource_type: "auto",
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        stream.pipe(cloudinaryUpload);
      });

      imageUrl = uploadResult.secure_url;
    } else {
      imageUrl =
        "https://cdn1.iconfinder.com/data/icons/ui-icon-part-3/128/image-512.png";
    }

    const { title, restaurantId, category, foodType, price } = req.body;

    // Create a new dish document
    const newDish = new Menu({
      dishName: title,
      restaurantId: restaurantId,
      image: imageUrl,
      category: category,
      foodType: foodType,
      price: price,
    });

    const restaurant = await Restaurant.findById(restaurantId);

    // Ensure the restaurant exists before saving the dish
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const uploadDish = await newDish.save();

    // Add a reference of the dish to the restaurant document
    restaurant.dish.push(uploadDish._id);
    await restaurant.save();

    res.status(200).json({ message: "Dish Uploaded successfully" });
  } catch (error) {
    console.error("Error registering restaurant:", error);
    res.status(500).json({ message: "Failed to Upload Dish" });
  }
});
// Get all dishish
router.get("/all-Dish", async (req, res) => {
  try {
    let allDish = await Menu.find({});
    res.status(200).json({ data: allDish });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
module.exports = router;
