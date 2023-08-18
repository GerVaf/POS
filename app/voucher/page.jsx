"use client";
import { useEffect, useState } from "react";
import { get } from "../Global/api/inventory";

const Voucher = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    get("/voucher")
      .then((response) => {
        console.log(setData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <div className="flex flex-wrap gap-10 ">
      {data?.map((vou) => {
        return (
          <div className=" flex flex-col bg-gradient-to-r from-purple-500 to-purple-600 w-4/12 text-gray-100 rounded-lg p-5 text-xl">
            <div className="flex gap-10">
              {/* name and phone  */}
              <div className="w-8/12 flex flex-col gap-5">
                <h1>{vou?.customer_name}</h1>
                <p>{vou?.phone_number}</p>
              </div>
              {/* amount  */}
              <div className="w-4/12 flex flex-col gap-5 justify-center text-center  ">
                <p className="text-sm font-semibold">Amount</p>
                <span className="font-bold">{vou?.net_total} kyats</span>
              </div>
            </div>
            {/* for beauty  */}
            <div className="my-5 flex items-center relative  ">
              <div className=" w-12 h-12 bg-purple-200 rounded-full absolute  right-[-50px]"></div>
              <div className="w-full border-b-2 border-dashed border-white"></div>
              <div className=" w-12 h-12 bg-purple-200 rounded-full absolute  left-[-50px]"></div>
            </div>
            {/* product count  */}
            <div className="flex">
              <div className="w-8/12 font-semibold flex flex-col">
                <span>Product Count - {vou?.count}</span>
                <p>To view detail product</p>
              </div>
              <button className="w-4/12 rounded-lg text-lg font-bold  bg-white text-purple-600 ">Detail</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Voucher;
