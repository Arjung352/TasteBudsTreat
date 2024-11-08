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

// Route to fetch all restaurant names
router.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({}, "title");
    res.status(200).json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ message: "Failed to fetch restaurants" });
  }
});

// Route to add a new menu item
router.post("/add-menu", upload.single("img"), async (req, res) => {
  try {
    let imageUrl = null;

    if (req.file) {
      const stream = streamifier.createReadStream(req.file.buffer);
      const uploadResult = await new Promise((resolve, reject) => {
        const cloudinaryUpload = cloudinary.uploader.upload_stream(
          { folder: "menu-items", resource_type: "auto" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.pipe(cloudinaryUpload);
      });
      imageUrl = uploadResult.secure_url;
    }

    const { restaurantId, restaurantName, dishName, category, foodType, price, rating, description } = req.body;

    const newMenuItem = new Menu({
      restaurantId,
      restaurantName,
      dishName,
      category,
      foodType,
      image: imageUrl,
      price,
      rating,
      description,
    });

    await newMenuItem.save();
    res.status(200).json({ message: "Menu item added successfully!" });
  } catch (error) {
    console.error("Error adding menu item:", error);
    res.status(500).json({ message: "Failed to add menu item" });
  }
});

module.exports = router;
