import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOption, setSortOption] = useState("rating");

  // Fetch restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/restaurant/get-all');
        const data = await response.json();
        setRestaurants(data.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };
    fetchRestaurants();
  }, []);

  // Filter and sort restaurants
  const filteredRestaurants = restaurants
    .filter((restaurant) =>
      restaurant.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((restaurant) =>
      filterCategory ? restaurant.category === filterCategory : true
    )
    .sort((a, b) =>
      sortOption === 'rating' ? b.rating - a.rating : a.title.localeCompare(b.title)
    );

  return (
    <div className="p-6 sm:p-8 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Delhi NCR Restaurants</h1>

      {/* Search & Filter Options */}
      <div className="flex justify-between mb-8">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="p-3 border rounded w-full sm:w-1/3 mr-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-3 border rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="rating">Sort by Rating</option>
          <option value="title">Sort by Name</option>
        </select>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant._id}
            to={`/menu/${restaurant._id}`}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={restaurant.image}
              alt={restaurant.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{restaurant.title}</h2>
              <p className="text-gray-600 mb-4">{restaurant.desc}</p>
              <span className="text-green-600 font-bold">Rating: {restaurant.rating} ⭐</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
