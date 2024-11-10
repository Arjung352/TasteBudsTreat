import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const { restaurantId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`/api/menu/${restaurantId}`);
        const data = await response.json();
        setMenu(data.menu);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };
    fetchMenu();
  }, [restaurantId]);

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.dishName} added to cart`);
  };

  const filteredMenu = menu.filter((item) =>
    filterCategory ? item.category === filterCategory : true
  );

  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-8">Menu</h1>
      
      {/* Filter Options */}
      <select
        className="p-3 border rounded mb-6"
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Appetizers">Appetizers</option>
        <option value="Main Course">Main Course</option>
        <option value="Desserts">Desserts</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMenu.map((item) => (
          <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={item.image}
              alt={item.dishName}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold">{item.dishName}</h3>
            <p className="text-gray-600">Category: {item.category}</p>
            <p className="text-gray-600">Type: {item.foodType}</p>
            <p className="text-green-600 font-bold mt-2">${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold">Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="border-b py-2">
              {item.dishName} - ${item.price}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
