import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

function Register_Restaurant() {
  const redirect = useNavigate();
  const [load, setLoad] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [rating, setRating] = useState("");

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
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", body);
    formData.append("rating", rating);

    if (image) {
      formData.append("img", image);
    }
    formData.append("username", localStorage.getItem("username"));

    setLoad(false);
    try {
      await axios.post(
        "https://taste-buds-treat-backend.vercel.app/api/restaurant/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle successful response
      setLoad(true);
      toast.success("Restaurant registered successfully!");
    } catch (error) {
      setLoad(true);
      console.error("Error registering restaurant:", error);
      toast.error("Failed to register restaurant. Please try again.");
    }
  };
  const redirectToMenu = () => {
    redirect("/Register-menu");
  };

  return load ? (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-4/5">
          <div className="mb-16">
            <p className="font-worksans text-4xl text-center font-medium pt-8">
              Register Your Restaurant
            </p>
            <div className="flex h-full justify-center mb-8 mt-8">
              <div className="w-2/4 flex justify-center max-sm:w-11/12 max-sm:mb-4">
                <form
                  onSubmit={submit}
                  className="backdrop-filter bg-gray-400 backdrop-blur-md bg-opacity-10 p-8 rounded-xl shadow-md border border-black font-worksans shadow-black w-full h-full"
                >
                  <label className="block text-lg font-semibold mb-4">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    placeholder="Restaurant Name"
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
                      <p className="text-gray-500 mt-2">
                        Attach your files here
                      </p>
                      <p className="text-blue-500">Browse files</p>
                    </div>
                  </div>

                  <label className="block text-lg font-semibold mb-4">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Restaurant Address"
                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    required
                  />

                  <label className="block text-lg font-semibold mb-4">
                    Rating
                  </label>
                  <input
                    type="number"
                    placeholder="Restaurant Rating"
                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    required
                  />

                  <button
                    type="submit"
                    className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                  <p className="text-center">
                    Already registered the restaurant?
                  </p>
                  <p
                    className=" text-center text-blue-600 underline decoration-slate-800"
                    onClick={redirectToMenu}
                  >
                    Register Dish!
                  </p>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
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

export default Register_Restaurant;
