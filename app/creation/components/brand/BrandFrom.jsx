'use client'

import { post } from "@/app/Global/api/inventory";
import { useState } from "react";

const BrandForm = ({refresh,setRefresh}) => {
  // product creation
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    description: "",
    agent: "",
    phone_no: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formData);
    post("brand", formData)
      .then((response) => {
        console.log(response);

        setRefresh(!refresh);
      })
      .catch((error) => console.log(error));
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="w-8/12 pt-10 flex flex-col gap-2 px-16"
      >
        <label htmlFor="name" className="text-gray-700 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className=" rounded-md p-2 outline-none bg-white"
        />

        <label htmlFor="company" className="text-gray-700 font-semibold">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className=" rounded-md p-2 outline-none bg-white"
        />

        <label htmlFor="description" className="text-gray-700 font-semibold">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className=" rounded-md p-2 outline-none bg-white"
        />

        <label htmlFor="agent" className="text-gray-700 font-semibold">
          Agent
        </label>
        <input
          type="text"
          id="agent"
          name="agent"
          value={formData.agent}
          onChange={handleChange}
          className=" rounded-md p-2 outline-none bg-white"
        />

        <label htmlFor="phone_no" className="text-gray-700 font-semibold">
          Phone Number
        </label>
        <input
          type="text"
          id="phone_no"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
          className=" rounded-md p-2 outline-none bg-white"
        />

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        >
          Create Product
        </button>
      </form>
  );
};

export default BrandForm;
