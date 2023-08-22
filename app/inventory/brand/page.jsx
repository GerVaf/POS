"use client";
import React, { useState } from "react";
import { del } from "@/app/Global/api/inventory";

const Brand = () => {
  const [itemId, setItemId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = () => {
    del(`brand/${itemId}`)
      .then((response) => {
        setMessage("Item deleted successfully.");
      })
      .catch((error) => {
        setMessage("An error occurred while deleting the item.");
      });
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <input
        type="text"
        placeholder="Item ID"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Item</button>
      <p>{message}</p>
    </div>
  );
};

export default Brand;
