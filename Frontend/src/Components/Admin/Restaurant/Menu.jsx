import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import Footer from "../../Footer/Footer";

function MenuForm() {
  const [load, setLoad] = useState(true);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [FoodType, setFoodType] = useState("");

  const handleCoverImg = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!selectedRestaurant) {
      toast.error("Please select a registered restaurant.");
      return;
    }

    // Create form data to handle file upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("restaurantId", selectedRestaurant); // Include selected restaurant ID
    formData.append("category", category);
    formData.append("foodType", FoodType);

    if (image) {
      formData.append("img", image); // Image file for upload to Cloudinary
    }
    setLoad(false);
    try {
      const response = await axios.post(
        "https://taste-buds-treat-backend.vercel.app/api/upload/menu",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoad(true);
      // Handle successful response
      toast.success("Dish uploaded successfully!");
    } catch (error) {
      setLoad(true);
      console.error("Error uploading dish:", error);
      toast.error("Failed to upload dish. Please try again.");
    }
  };
  // to fetch all the Restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "https://taste-buds-treat-backend.vercel.app/api/restaurant/get-all"
        );
        console.log("Fetched restaurants:", response.data.data);
        setRestaurants(response.data.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);

  return load ? (
    <div className="flex justify-center">
      <div className="w-4/5">
        <div className="mb-16">
          <p className="font-worksans text-4xl text-center font-medium pt-8">
            Enter The Dish That You Offer!
          </p>
          <div className="flex h-full justify-center mb-8 mt-8">
            <div className="w-2/4 flex justify-center max-sm:w-11/12 max-sm:mb-4">
              <form
                onSubmit={submit}
                className="bg-white p-8 rounded-lg shadow-md border border-black font-worksans shadow-black w-full h-full"
              >
                <label className="block text-lg font-semibold mb-4">
                  Dish Name
                </label>
                <input
                  type="text"
                  placeholder="Dish Name"
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />

                <label className="block text-lg font-semibold mb-4">
                  Upload an Image
                </label>
                <div className="border-dashed border-2 border-gray-300 p-4 mb-4 rounded relative">
                  <input
                    type="file"
                    name="coverimg"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleCoverImg}
                  />
                  <div className="flex flex-col items-center justify-center">
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Selected Preview"
                        className="h-32 w-32 object-cover rounded mb-2"
                      />
                    ) : (
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 15a4 4 0 100-8 4 4 0 000 8zM3 15v2a4 4 0 004 4h10a4 4 0 004-4v-2M16 7l-4-4m0 0L8 7m4-4v12"
                        />
                      </svg>
                    )}
                    <p className="text-gray-500 mt-2">Attach your files here</p>
                    <p className="text-blue-500">Browse files</p>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-lg font-semibold mb-4">
                    Select Registered Restaurant
                  </label>
                  {restaurants.length > 0 ? (
                    <select
                      id="Restaurant"
                      name="Restaurant"
                      value={selectedRestaurant}
                      onChange={(e) => setSelectedRestaurant(e.target.value)}
                      className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="" disabled>
                        Select a restaurant
                      </option>
                      {restaurants.map((rest) => (
                        <option key={rest._id} value={rest._id}>
                          {rest.title}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p>No restaurants found</p>
                  )}
                </div>
                <label className="block text-lg font-semibold mb-4">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Dish price"
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  required
                />
                <label className="block text-lg font-semibold mb-4">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Enter Category"
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  required
                />
                <label className="block text-lg font-semibold mb-4">
                  Food Type
                </label>
                <select
                  id="Restaurant"
                  name="Restaurant"
                  value={FoodType}
                  onChange={(e) => setFoodType(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select The Food Type
                  </option>
                  <option value={"Vegetarian"}>Vegetarian</option>
                  <option value={"Non - Vegetarian"}>Non-Vegetarian</option>
                </select>

                <button
                  type="submit"
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  ) : (
    <div className="w-full bg-white h-screen flex justify-center items-center">
      <TailSpin
        height="80"
        width="80"
        color="#3f66dd"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default MenuForm;
