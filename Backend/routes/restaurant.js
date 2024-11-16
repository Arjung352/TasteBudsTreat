const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const Restaurant = require("../Models/Restaurant.js");
const router = express.Router();
const streamifier = require("streamifier");

// Cloudinary configuration (ensure it's set up in your .env file)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup to handle the file upload
const storage = multer.memoryStorage(); // Using memory storage instead of disk storage
const upload = multer({ storage: storage });

// Route to register restaurant
router.post("/register", upload.single("img"), async (req, res) => {
  try {
    let imageUrl = null;

    // If an image is uploaded, upload it to Cloudinary
    if (req.file) {
      const stream = streamifier.createReadStream(req.file.buffer);

      const uploadResult = await new Promise((resolve, reject) => {
        const cloudinaryUpload = cloudinary.uploader.upload_stream(
          {
            folder: "restaurants", // Cloudinary folder name (optional)
            resource_type: "auto", // Automatically detect file type (image, video, etc.)
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

      imageUrl = uploadResult.secure_url; // Get the image URL from Cloudinary
    } else {
      imageUrl =
        "https://cdn1.iconfinder.com/data/icons/ui-icon-part-3/128/image-512.png";
    }
    const { title, desc, rating } = req.body;
    // Create a new restaurant document in the database
    const newRestaurant = new Restaurant({
      title: title,
      desc: desc,
      image: imageUrl,
      rating: rating,
    });
    const restaurant = await Restaurant.findOne({ title });
    if (!restaurant) {
      await newRestaurant.save();
      res.status(200).json({ message: "Restaurant registered successfully!" });
    } else {
      res.status(400).json({ message: "Restaurant Allready exists" });
    }
    // Save the new restaurant to the database
  } catch (error) {
    console.error("Error registering restaurant:", error);
    res.status(500).json({ message: "Failed to register restaurant" });
  }
});
// Route to get all info regarding to the Restaurents
router.get("/get-all", async (req, res) => {
  try {
    let All_restaurant = await Restaurant.find({});
    res.status(200).json({ data: All_restaurant });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
module.exports = router;
