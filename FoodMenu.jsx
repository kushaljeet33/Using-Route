import React, { useState } from "react";

const foodItems = [
  { id: 1, name: "Burgur", category: "Fast Food", price: 150, img: "burger.jpg" },
  { id: 2, name: "Chapati", category: "Dinner", price: 250, img: "chapati.jpg" },
  { id: 3, name: "Chicken Chilli", category: "Non Veg", price: 200, img: "chicken.jpg" },
  { id: 4, name: "Chowmin", category: "Fast Food", price: 60, img: "chowmin.jpg" },
  { id: 5, name: "Capichino", category: "Coffee", price: 160, img: "capichino.jpg" },
  { id: 6, name: "Green Tea", category: "Tea", price: 160, img: "greentea.jpg" },
  { id: 7, name: "Idali Dosha", category: "Break Fast", price: 160, img: "idali.jpg" },
];

const categories = [
  "All Food", "Fast Food", "Veg", "Non Veg", "Break Fast", "Lunch", "Dinner", "Tea", "Coffee"
];

const FoodMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Food");

  const filteredItems = selectedCategory === "All Food"
    ? foodItems
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container">
      {/* Header */}
      <h1 className="menu-title">Food Menu Item</h1>

      {/* Category Filter Buttons */}
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Food Items Grid */}
      <div className="food-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="food-card">
            <img src={`/images/${item.img}`} alt={item.name} className="food-img" />
            <h3>{item.name}</h3>
            <p className="food-category">{item.category}</p>
            <p className="food-price">Price: Rs. {item.price}</p>
            <button className="order-button">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
