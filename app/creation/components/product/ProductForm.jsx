"use client";

import { get, post } from "@/app/Global/api/inventory";
import { useEffect, useState } from "react";

const ProductForm = ({ setRefresh, refresh }) => {
  // product creation
  const [formData, setFormData] = useState({
    name: "",
    brand_id: "",
    actual_price: "",
    sale_price: "",
    unit: "",
    more_information: "",
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

    console.log(formData);
    post("product", formData)
      .then((response) => {
        console.log(response);

        setRefresh(!refresh);
      })
      .catch((error) => console.log(error));
  };

  // for select brand_id
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    get("brand")
      .then((response) => setBrands(response?.data.data))
      .catch((error) => console.log(error));
  }, []);
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

      <label htmlFor="brand_id" className="text-gray-700 font-semibold">
        Brand ID
      </label>
      <select
        id="brand_id"
        name="brand_id"
        value={formData.brand_id}
        onChange={handleChange}
        className="rounded-md p-2 outline-none bg-white"
      >
        <option value="">Select a brand</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>

      <label htmlFor="actual_price" className="text-gray-700 font-semibold">
        Actual Price
      </label>
      <input
        type="number"
        id="actual_price"
        name="actual_price"
        value={formData.actual_price}
        onChange={handleChange}
        className=" rounded-md p-2 outline-none bg-white"
      />

      <label htmlFor="sale_price" className="text-gray-700 font-semibold">
        Sale Price
      </label>
      <input
        type="number"
        id="sale_price"
        name="sale_price"
        value={formData.sale_price}
        onChange={handleChange}
        className=" rounded-md p-2 outline-none bg-white"
      />

      <label htmlFor="unit" className="text-gray-700 font-semibold">
        Unit
      </label>
      <input
        type="text"
        id="unit"
        name="unit"
        value={formData.unit}
        onChange={handleChange}
        className=" rounded-md p-2 outline-none bg-white"
      />

      <label htmlFor="more_information" className="text-gray-700 font-semibold">
        More Information
      </label>
      <textarea
        id="more_information"
        name="more_information"
        value={formData.more_information}
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

export default ProductForm;
