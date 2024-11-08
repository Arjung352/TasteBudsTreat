import React, { useEffect, useState } from "react";
import axios from "axios";

function MenuForm() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("/api/menu/restaurants");
        console.log("Fetched restaurants:", response.data);
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Menu Form</h1>
      {restaurants.length > 0 ? (
        <ul>
          {restaurants.map((rest) => (
            <li key={rest._id}>{rest.title}</li>
          ))}
        </ul>
      ) : (
        <p>No restaurants found</p>
      )}
    </div>
  );
}

export default MenuForm;
