import React, { useState } from "react";
import { createCustomItem } from "../services/CustomItemsAPI.js";
// Import other services as needed

export const AddCustomItem = () => {
  const [itemData, setItemData] = useState({
    category: "",
    title: "",
    description: "",
    // other fields...
  });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomItem(itemData);
      // Redirect to the list or handle the response as needed
    } catch (error) {
      console.error("Error creating item: ", error);
    }
  };

  return (
    <div>
      <h1>Add Custom Item</h1>
      <form onSubmit={handleSubmit}>
        {/* Create form fields for category, title, description, etc. */}
        <input
          type="text"
          name="title"
          value={itemData.title}
          onChange={handleChange}
          required
        />
        {/* Repeat for other fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};