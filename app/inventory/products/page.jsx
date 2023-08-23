"use client";

import { get } from "@/app/Global/api/inventory";
import Image from "next/image";
import { useEffect, useState } from "react";
import tea from "@/public/tea.jpg";
import {
  AiOutlinePlus,
  AiOutlinePrinter,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import axios from "axios";
import CreateProducts from "./components/CreateProducts";
// import { BsCreditCard2BackFill } from "react-icons/bs";

const Products = () => {
  const arr = Array(10).fill("");
  const [data, setData] = useState([]);
  useEffect(() => {
    get("product")
      .then((response) => {
        // console.log(setData( response.data.data));
        setData(response.data.data);
        // console.log("Get Respn",response)
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
    // fetchData();
  }, []);

  console.log(data);
  return (
    <div className="relative">
    <div className="  flex    gap-5 ">
      <div className=" w-8/12 ">
        <div className=" grid grid-cols-2 gap-5">
          {arr?.map((a, index) => {
            return (
              <div
                className="  bg-gray-50/20 shadow-md p-3 rounded-lg"
                key={index}
              >
                <div className="   space-y-3">
                  <div className=" grid   grid-cols-2 gap-5">
                    <Image
                      alt="fakepng"
                      src={tea}
                      width={200}
                      height={200}
                      objectFit="cover"
                      className=" rounded-md"
                    />

                    <div className="  space-y-2">
                      <h1 className="   text-zinc-800 uppercase text-xl">
                        Name
                      </h1>
                      <div className=" flex  gap-6">
                        <p className="">BranDName</p>
                        <p className=" text-rose-500">$230</p>
                      </div>
                      <div className=" flex items-center gap-5  justify-center">
                        <p>
                          {/* <span>unit:</span> */}
                          <span className=" text-green-800">drozen</span>
                        </p>
                        <p>
                          {/* <span>stock:</span> */}
                          <span className=" text-indigo-800">132</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="  grid grid-cols-2 gap-5 items-center">
                    <p className=" flex  justify-center items-center gap-5">
                      <span className="w-8 h-8  shadow-sm border border-gray-400 rounded-full flex items-center justify-center">
                        -
                      </span>
                      <span>12</span>
                      <span className=" w-8 h-8 shadow-sm border border-gray-400 rounded-full flex items-center justify-center">
                        +
                      </span>
                    </p>

                    <button className=" bg-black text-white  p-2  rounded-md  ">
                      Add To Card
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-4/12 bg-violet-400/10    shadow-md ">
        <h1 className=" p-5 text-2xl">Current Order</h1>

        {arr?.map((a, index) => {
          return (
            <div
              className=" mx-3 p-3  flex shadow-sm rounded-md gap-6"
              key={index}
            >
              <Image
                src={tea}
                width={100}
                height={100}
                objectFit="cover"
                className=" "
              />
              <div className=" space-y-2">
                <h1>Title</h1>
                <div className=" grid grid-cols-2">
                  <h2 className=" text-rose-500 font-medium text-[18px]">
                    $232
                  </h2>
                  <p className=" flex  justify-center items-center gap-5">
                    <span className="w-5 h-5 bg-violet-600/10 rounded-full flex items-center justify-center">
                      -
                    </span>
                    <span>12</span>
                    <span className=" w-5 h-5 bg-teal-800 text-white rounded-full flex items-center justify-center">
                      +
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className=" mx-5 my-10">
          <table className=" table-fixed  w-full border">
            <thead>
              <tr className=" flex justify-between">
                <th className=" px-3 py-2">items</th>
                <th className="px-3 py-2">24234</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" flex justify-between  items-center">
                <th className=" px-3 py-2">Discounts</th>
                <td className="px-3 py-2">10%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className=" flex  justify-between items-center  border-t  border-gray-400">
                <th className=" font-medium  px-3 py-2">SubTotal</th>
                <td className="  font-medium px-3 py-2">$124</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <button className=" mx-5 my-3  bg-black p-3 rounded-md w-[90%] flex items-center justify-between">
          <span className=" text-white">Invoice Printinig</span>
          <AiOutlinePrinter size={18} className=" text-white" />
        </button>
      </div>

    
    


     
    </div>
    {/* CreateProduct */}
    <CreateProducts />
 
    </div>
  );
};

export default Products;

{
  /* <div className=" my-3 mx-5 space-y-3">
<div className="   w-full border-2 py-3 px-3 rounded-md   border-green-800 flex justify-between focus:border-green-800">
  <input
    type="text"
    className="   gap-5  outline-none bg-transparent w-[100%] "
    placeholder=" Pay By Cash "
  />

  <BsCreditCard2BackFill size={18} />
</div>

<div className="w-full border-2 py-3 px-3 rounded-md   border-green-800 flex justify-between focus:border-green-800">
  <input
    type="text"
    className="   gap-5  outline-none bg-transparent w-[100%] "
    placeholder=" Pay card "
  />

  <BsCreditCard2BackFill size={18} />
</div>
</div> */
}
