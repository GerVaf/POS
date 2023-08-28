"use client";

import { get } from "@/app/Global/api/inventory";
import Image from "next/image";
import { useEffect, useState } from "react";
import tea from "@/public/tea.jpg";
import { BsCheckAll, BsPatchPlus } from "react-icons/bs";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "@/app/Global/Slice/productSlice";

const Products = () => {
  // to show for added
  const { products } = useSelector((state) => state?.product);
  // console.log(products);

  // for add to cart
  const dispath = useDispatch();

  // to show product
  const [data, setData] = useState([]);
  useEffect(() => {
    get("product")
      .then((response) => {
        const inCart = response?.data?.data?.map((item) => {
          item = { ...item, quantity: 0, active: false };
          return item;
        });
        // console.log(inCart)
        setData(inCart);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, []);

  // console.log(data);
  return (
    <div className="flex p-5">
      <div className="w-8/12 flex flex-wrap overflow-y-scroll h-[100vh] scrollbar-track-purple-100 scrollbar-thin scrollbar-thumb-purple-600">
        {data?.map((it) => {
          return (
            <div
              key={it.name}
              className="w-6/12  p-5 flex justify-center items-center "
            >
              {/* real item  */}
              <div
                onClick={() =>
                  products?.find((added) => added?.name === it?.name)
                    ? dispath(removeProduct(it))
                    : dispath(addProduct(it))
                }
                className="relative overflow-hidden p-5 flex bg-gray-100 rounded-lg h-full w-[95%] cursor-pointer hover:bg-slate-100 "
              >
                {/* add to cart noti  */}
                <div
                  className={`absolute top-0 right-0 w-16 h-10 bg-white text-2xl flex justify-center items-center rounded-es-lg ${
                    products?.find((added) => added?.id === it?.id)
                      ? "text-green-600"
                      : "text-purple-600"
                  }`}
                >
                  {products?.find((added) => added?.id === it?.id) ? (
                    <BsCheckAll />
                  ) : (
                    <BsPatchPlus />
                  )}
                </div>
                <Image
                  className="w-6/12 h-full object-cover rounded-lg"
                  alt="png"
                  src={tea}
                />
                {/* information for item  */}
                <div className="w-6/12 h-full flex flex-col pl-5 justify-around">
                  <p>Name: {it?.name}</p>
                  <p>Price : {it?.sale_price}</p>
                  <p>Unit : {it?.unit}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-4/12 ">
        <Cart />
      </div>
    </div>
  );
};

export default Products;
