"use client";
import { get } from "@/app/Global/api/inventory";
import { useEffect, useState } from "react";

const stockShow = ({refresh}) => {
  const [productData, setProductData] = useState([]);
  const fetchData = async () => {
    await get("stock")
      .then((response) => setProductData(response?.data?.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, [refresh]);
  console.log(productData);
  return (
    <div className="flex flex-col gap-1 px-1">
      {productData?.map((item) => {
        return (
          <div
            className="h-[15vh] flex px-5 py-2 bg-violet-100 rounded-md justify-between text-gray-700"
            key={item?.id}
          >
            <div className="flex flex-col justify-around font-bold text-lg">
              <p>
                Product Name :{" "}
                <span className=" font-semibold text-purple-600 text-base">
                  {item?.product_name}
                </span>
              </p>
              <p>
                Stock :{" "}
                <span className=" font-semibold text-purple-600 text-base">
                  {item?.quantity}
                </span>
              </p>
              <p>
                More Information :{" "}
                <span className=" font-semibold text-purple-600 text-base">
                  {item?.more_information}
                </span>{" "}
              </p>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default stockShow;
