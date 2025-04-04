import React, { useEffect, useState } from "react";
import axios from "axios";
import TuneIcon from "@mui/icons-material/Tune";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import ReactPaginate from "react-paginate";
import { toast, Toaster } from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TailSpin } from "react-loader-spinner";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Chatbot from "../ChatBot/Chatbot";

// importing redux
import { useDispatch } from "react-redux";
import { updateTotalCartItems } from "../Redux/Slice/CartSlice";
import Navbar from "../Navbar/Navbar";

function Menu() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [foodType, setFoodType] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [food, setFood] = useState([]);
  const [modalRestaurant, setModalRestaurant] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [slidesToShow, setSlidesToShow] = useState(5);
  // setting load on adding to cart
  const [loadingStates, setLoadingStates] = useState({});
  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const width = window.innerWidth;
  let itemsPerPage = 8; // Number of items to display per page
  if (width < 768) {
    itemsPerPage = 5;
  }
  useEffect(() => {
    const width = window.innerWidth;
    const handleResize = () => {
      if (width < 550) {
        setSlidesToShow(1);
      } else if (width < 800) {
        setSlidesToShow(2);
      } else if (width < 1000) {
        setSlidesToShow(3);
      } else if (width < 1300) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
      console.log(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const fetchRestaurants = async () => {
      try {
        const restaurantResponse = await axios.get(
          "https://taste-buds-treat-backend.vercel.app/api/restaurant/get-all"
        );
        setRestaurants(restaurantResponse.data.data);

        const foodResponse = await axios.get(
          "https://taste-buds-treat-backend.vercel.app/api/upload/all-Dish"
        );
        setFood(foodResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurants();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Shuffle function
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [shuffledFood, setShuffledFood] = useState([]);

  useEffect(() => {
    setShuffledFood(
      shuffleArray(
        food.filter(
          (item) =>
            (!selectedRestaurant || item.restaurantId === selectedRestaurant) &&
            (!foodType || item.foodType === foodType) &&
            (!foodCategory || item.category === foodCategory)
        )
      )
    );
  }, [food, selectedRestaurant, foodType, foodCategory]);

  const addingToCart = async (productId, price, dishName, img) => {
    setLoadingStates((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
    try {
      const data = {
        productId,
        price,
        dishName,
        img,
        UserName: localStorage.getItem("UserName"),
      };

      await axios.post(
        "https://taste-buds-treat-backend.vercel.app/api/cart/AddToCart",
        data
      );

      const username = localStorage.getItem("UserName");
      const response = await axios.get(
        "https://taste-buds-treat-backend.vercel.app/api/cart/show-cart",
        {
          headers: {
            username: username,
          },
        }
      );

      const cartItemCount = response.data.data.length;
      dispatch(updateTotalCartItems(cartItemCount));
      toast.success("Item Added To Cart");
    } catch (error) {
      if (!localStorage.getItem("UserName")) {
        setLoadingStates((prevState) => ({
          ...prevState,
          [productId]: false,
        }));
        return toast.error("Please Login Or Sign In First");
      }
      toast.error("Error Adding To Cart!");
      console.error(
        "Error adding to cart:",
        error.response?.data || error.message
      );
    }
    setLoadingStates((prevState) => ({
      ...prevState,
      [productId]: false,
    }));
  };

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const currentItems = shuffledFood.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(shuffledFood.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  const handleRestaurantClick = (restaurant) => {
    setModalRestaurant(restaurant);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalRestaurant(null);
  };
  return (
    <div className="relative">
      <Navbar />
      <div className="flex justify-center">
        <Chatbot />
        <div className="w-4/5 font-WorkSans max-md:w-3/4">
          <div className="flex max-md:flex-col max-md:items-start gap-7 mt-10 items-center text-gray-500">
            <p className="p-2 bg-white border-gray-300 border rounded-xl">
              Filters <TuneIcon />
            </p>
            {restaurants.length > 0 ? (
              <select
                id="Restaurant"
                name="Restaurant"
                value={selectedRestaurant}
                onChange={(e) => setSelectedRestaurant(e.target.value)}
                className="p-2 border  border-gray-300 rounded-xl focus:outline-none"
              >
                <option value="">All Restaurants</option>
                {restaurants.map((rest) => (
                  <option key={rest._id} value={rest._id}>
                    {rest.title}
                  </option>
                ))}
              </select>
            ) : (
              <p>No restaurants found</p>
            )}
            <select
              id="FoodType"
              name="FoodType"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              className="p-2 border border-gray-300 rounded-xl focus:outline-none w-56"
            >
              <option value="">All Food Types</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non - Vegetarian">Non-Vegetarian</option>
            </select>
            <select
              id="FoodCategory"
              name="FoodCategory"
              value={foodCategory}
              onChange={(e) => setFoodCategory(e.target.value)}
              className="p-2 border border-gray-300 rounded-xl focus:outline-none"
            >
              <option value="">All Categories</option>
              {[...new Set(food.map((dish) => dish.category))].map(
                (uniqueCategory, index) => (
                  <option value={uniqueCategory} key={index}>
                    {uniqueCategory}
                  </option>
                )
              )}
            </select>
          </div>
          {/* Ispiration for your first order */}
          <div className="mt-10 flex flex-col items-center">
            <p className="text-2xl font-medium font-WorkSans self-start">
              Inspiration For Your First Order
            </p>

            <Slider {...settings}>
              {food.map((value, index) => (
                <a
                  href="#Menu"
                  key={index}
                  className=" justify-center relative cursor-pointer mt-8 flex flex-col items-center hover:scale-105 transition-all ease-in-out"
                >
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="aspect-square rounded-full h-32 w-32 shadow-md shadow-black"
                      src={value.image}
                    />
                    <p className="w-32 text-center mt-3">{value.dishName}</p>
                  </div>
                </a>
              ))}
            </Slider>
          </div>

          {/* Top Brands For You */}
          <div className="mt-10 flex flex-col items-center">
            <p className="text-2xl font-medium font-WorkSans self-start">
              Top Brands For You
            </p>
            <Slider {...settings}>
              {restaurants.map((restaurant, index) => (
                <button
                  key={index}
                  onClick={() => handleRestaurantClick(restaurant)}
                  className="justify-center relative cursor-pointer mt-8 flex flex-col items-center hover:scale-105 transition-all ease-in-out"
                >
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="aspect-square rounded-full h-32 w-32 shadow-md shadow-black"
                      src={restaurant.image}
                      alt={restaurant.title}
                    />
                    <p className="w-32 text-center mt-3">{restaurant.title}</p>
                  </div>
                </button>
              ))}
            </Slider>
          </div>
          {/* Dishes Section */}
          <div id="Menu" className="mt-10 flex flex-col items-center">
            <p className="text-2xl font-medium font-WorkSans self-start">
              Dishish Near You!
            </p>
          </div>
          {console.log(currentItems)}
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-10 mb-10 gap-y-10">
            {currentItems.map((value, index) => (
              <div
                key={index}
                className=" shadow-lg backdrop-filter backdrop-blur-md bg-opacity-15 bg-gray-300 shadow-stone-400 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 transition-all ease-in-out mb-6"
              >
                <img
                  src={value.image}
                  className="max-h-full max-w-full rounded-t-xl m-auto block"
                />
                <div className="self-start px-3">
                  <p className="mt-4 text-xl font-medium">{value.dishName}</p>
                  <p className="mt-2 text-sm font-sans uppercase">
                    {value.foodType}
                  </p>
                </div>
                <div className="flex justify-between w-full mt-2 px-3">
                  <p>₹{value.price}</p>
                  <p>{value.category}</p>
                </div>
                <div className="mt-5 gap-10 flex w-full rounded-xl">
                  <button
                    onClick={() => {
                      addingToCart(
                        value._id,
                        value.price,
                        value.dishName,
                        value.image
                      );
                    }}
                    className="py-2 text-center shadow-md w-full bg-slate-200 text-base rounded-b-xl backdrop-filter backdrop-blur-md hover:text-green-600 bg-opacity-15 transition-all ease-in-out duration-300"
                  >
                    {loadingStates[value._id] ? (
                      <TailSpin
                        height="25"
                        width="25"
                        color="#23c55e"
                        ariaLabel="tail-spin-loading"
                        radius="2"
                        wrapperStyle={{ display: "inline-block" }}
                        visible={true}
                      />
                    ) : (
                      <p>
                        Add To Cart <ShoppingCartIcon color="success" />
                      </p>
                    )}
                  </button>
                </div>
              </div>
            ))}
            {currentItems && currentItems.length === 0 && (
              <>
                {" "}
                <div>
                  <Skeleton className="mb-4 h-10  " />
                  <Skeleton count={5} />
                </div>
                <div className="max-sm:hidden">
                  <Skeleton className="mb-4 h-10" />
                  <Skeleton count={5} />
                </div>
                <div className="max-md:hidden">
                  <Skeleton className="mb-4 h-10" />
                  <Skeleton count={5} />
                </div>
                <div className="max-md:hidden">
                  <Skeleton className="mb-4 h-10" />
                  <Skeleton count={5} />
                </div>
              </>
            )}
          </div>

          {/* Pagination Component */}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"flex justify-center gap-1 mb-4 flex-wrap mt-6"}
            pageClassName={
              "px-3 py-2 shadow-stone-500 rounded-xl shadow-md  mx-1"
            }
            activeClassName={"bg-gray-300"}
            previousClassName={
              "px-3 py-2 shadow-stone-500 rounded-xl shadow-md  mx-1"
            }
            nextClassName={
              "px-3 py-2 shadow-stone-500 rounded-xl shadow-md  mx-1"
            }
          />
          {/* Modal for Restaurant Details */}
          {showModal && modalRestaurant && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="backdrop-filter backdrop-blur-md bg-opacity-75 bg-white relative rounded-xl shadow-lg p-8 w-3/4 max-h-[90vh] overflow-auto">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-10 max-md:text-xl max-md:right-6 text-red font-bold text-3xl"
                >
                  ✖
                </button>
                <div className="flex flex-col items-center">
                  <img
                    src={modalRestaurant.image}
                    className="h-48 w-48 rounded-full shadow-md"
                  />
                  <p className="text-3xl font-bold mt-4">
                    {modalRestaurant.title}
                  </p>
                  <p className="text-lg text-gray-600 mt-2">
                    {modalRestaurant.address}
                  </p>
                  <p className="text-lg mt-2">
                    Rating: {modalRestaurant.rating}⭐
                  </p>
                  <p className="text-lg mt-2">
                    Dishes Available:{" "}
                    {
                      food.filter(
                        (dish) => dish.restaurantId === modalRestaurant._id
                      ).length
                    }
                  </p>
                </div>

                {/* Render dishes offered by the selected restaurant */}
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 mt-8">
                  {food
                    .filter((dish) => dish.restaurantId === modalRestaurant._id)
                    .map((dish, index) => (
                      <div
                        key={index}
                        className="shadow-lg backdrop-filter backdrop-blur-md bg-opacity-5 bg-gray-200 shadow-stone-400 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 transition-all ease-in-out mb-6"
                      >
                        <img
                          src={dish.image}
                          className="max-h-40 max-w-full rounded-t-xl m-auto block"
                        />
                        <div className="px-3 flex flex-col items-center">
                          <p className="mt-4 text-xl font-medium max-md:text-lg">
                            {dish.dishName}
                          </p>
                          <p className="mt-2 text-lg max-md:text-base uppercase">
                            {dish.foodType}
                          </p>
                        </div>
                        <div className="flex justify-between max-sm:px-1 w-full mt-4 px-3">
                          <p className="text-lg">₹{dish.price}</p>
                          <p className="text-lg">{dish.category}</p>
                        </div>
                        <button
                          onClick={() =>
                            addingToCart(
                              dish._id,
                              dish.price,
                              dish.dishName,
                              dish.image
                            )
                          }
                          className="py-2 mt-3 text-center shadow-md w-full bg-slate-200 text-base rounded-b-xl backdrop-filter backdrop-blur-md hover:text-green-600 bg-opacity-15 transition-all ease-in-out duration-300"
                        >
                          {loadingStates[dish._id] ? (
                            <TailSpin
                              height="25"
                              width="25"
                              color="#23c55e"
                              ariaLabel="tail-spin-loading"
                              radius="2"
                              wrapperStyle={{ display: "inline-block" }}
                              visible={true}
                            />
                          ) : (
                            <p>
                              Add To Cart <ShoppingCartIcon color="success" />
                            </p>
                          )}
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          <Footer />
        </div>
        <Toaster />
      </div>
    </div>
  );
}

export default Menu;
