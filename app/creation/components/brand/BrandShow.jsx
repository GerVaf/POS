"use client";
import { get } from "@/app/Global/api/inventory";
import { useEffect, useState } from "react";

const BrandShow = ({refresh}) => {
  const [productData, setProductData] = useState([]);
  const fetchData = async () => {
    await get("brand")
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
                Name :{" "}
                <span className=" font-semibold text-purple-600 text-base">
                  {item?.name}
                </span>
              </p>
              <p>
                Ph number :{" "}
                <span className=" font-semibold text-purple-600 text-base">
                  {item?.phone_no}
                </span>
              </p>
              <p>
                Agent :{" "}
                <span className=" font-semibold text-purple-600 text-base">
                  {item?.agent}
                </span>{" "}
              </p>
              <p>
                Company :{" "}
                <span className=" font-semibold text-purple-600 text-base">
                  {item?.company}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandShow;
