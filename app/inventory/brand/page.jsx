"use client";
import { post } from "@/app/Global/api/inventory";
import React, { useState } from "react";

function Brand() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    information: "", 
    agent: "",
    phone_no: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await post('brand', formData);
      console.log('Post response:', response.data);
      // You can do something with the response data here
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Post Data</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="information" // Corrected field name
          placeholder="Information"
          value={formData.information} // Corrected field name
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="agent"
          placeholder="Agent"
          value={formData.agent}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone_no"
          placeholder="Phone Number"
          value={formData.phone_no}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Brand;
