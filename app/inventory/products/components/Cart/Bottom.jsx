"use client";

import {
  deleteQTY,
  qtyChange,
  resetQTY,
} from "@/app/Global/Slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { BiReset } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { CiDiscount1 } from "react-icons/ci";
const Bottom = () => {
  const dispatch = useDispatch();
  const qty = useSelector((state) => state?.product.qunatity);
  console.log(qty);

  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const fun = [
    {
      label: "RES",
      icon: <BiReset />,
      func: () => {
        dispatch(resetQTY(0));
      },
    },
    {
      label: "DEL",
      icon: <FaDeleteLeft />,
      func: () => {
        dispatch(deleteQTY(1));
      },
    },
    { label: "DIS", icon: <CiDiscount1 />, func: () => {} },
  ];
  return (
    <div className="flex h-[30vh]">
      {/* number  */}
      <div className="w-9/12 flex flex-wrap p-5 justify-center items-center">
        {count.map((num) => {
          return (
            <div
              className="cursor-pointer w-4/12 h-16   flex justify-center  items-center text-lg p-[1px]"
              key={num}
            >
              <p
                onClick={() => dispatch(qtyChange(num))}
                className="hover:bg-purple-200 border transition duration-150  bg-gray-100 border-purple-400 rounded w-full h-full items-center justify-center flex"
              >
                {num}
              </p>
            </div>
          );
        })}
      </div>
      {/* function  */}
      <div className="w-3/12 flex flex-col justify-between py-5">
        {fun?.map((btn) => {
          return (
            <div
              onClick={btn?.func}
              key={btn?.label}
              className="hover:bg-purple-200 cursor-pointer w-2/2 h-full m-[5px] transition duration-150 rounded-md flex justify-center items-center border border-purple-400 bg-gray-100"
            >
              {btn?.label}
              <span className="text-xl text-gray-600 pl-2 ">{btn?.icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bottom;
