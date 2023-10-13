import React, { useState, useEffect } from "react";
import { getAllCustomItems } from "../services/CustomItemsAPI.js";

export const CustomItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCustomItems();
        setItems(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Custom Items</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          {/* Display other item properties as needed */}
        </div>
      ))}
    </div>
  );
};