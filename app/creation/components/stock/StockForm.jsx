"use client";

import { get, post } from "@/app/Global/api/inventory";
import { useEffect } from "react";
import { useState } from "react";

const StockForm = ({refresh,setRefresh}) => {
  // product creation
  const [formData, setFormData] = useState({
    product_id: "",
    quantity: "",
    more_information: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);
    post("stock", formData)
      .then((response) => {
        console.log(response);

        setRefresh(!refresh);
      })
      .catch((error) => console.log(error));
  };
  // for product_id
  const [product, setProduct] = useState([]);
  useEffect(() => {
    get("product")
      .then((response) => setProduct(response?.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-8/12 pt-10 flex flex-col gap-2 px-16"
    >
      <label htmlFor="name" className="text-gray-700 font-semibold">
        Product Name
      </label>

      <select
        id="product_id"
        name="product_id"
        value={formData.product_id}
        onChange={handleChange}
        className="rounded-md p-2 outline-none bg-white"
      >
        <option value="">Select a product</option>
        {product?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <label htmlFor="quantity" className="text-gray-700 font-semibold">
        Quantity
      </label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        className=" rounded-md p-2 outline-none bg-white"
      />

      <label htmlFor="more_information" className="text-gray-700 font-semibold">
        More information
      </label>
      <input
        type="text"
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

export default StockForm;
