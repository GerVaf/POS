"use client";
import { get } from "@/app/Global/api/inventory";
import { useEffect, useState } from "react";
import brand from "@/public/product.gif";
import Image from "next/image";

const StockShow = ({ refresh }) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const fetchData = async () => {
    setIsLoading(true); 
    try {
      const response = await get("stock");
      setProductData(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);
  console.log(productData);

  return (
    <div className="flex h-[100%] flex-col gap-1 px-1">
      {isLoading ? (
        <div className="flex justify-center items-center h-[100%] ">
          <Image alt="img" src={brand} />
        </div>
      ) : (
        productData?.map((item) => (
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
        ))
      )}
    </div>
  );
};

export default StockShow;
