"use client";
import { setActive } from "@/app/Global/Slice/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Items = () => {
  const { products } = useSelector((state) => state?.product);
  // console.log(products);
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col h-[60vh] ml-5 border border-white rounded-md bg-gray-100 overflow-y-scroll scrollbar-track-purple-100 scrollbar-thin scrollbar-thumb-purple-600">
      {products?.length === 0 ? (
        <div className="font-bold text-gray-700 w-full h-full flex justify-center items-center ">
          <span>There's no product in cart!</span>
        </div>
      ) : (
        <div>
          {products?.map((item) => {
            return (
              <div
              key={item?.id}
              className={`h-[15vh] flex justify-between p-2 border border-white rounded-md bg-violet-200 w-full transition duration-100 ${
                item?.active ? "bg-violet-400 text-white" : ""}`
              }
              onClick={() => dispatch(setActive(item?.id))} 
            >
                <div className={`flex flex-col justify-between font-semibold transition duration-100 ${item?.active ? 'text-white':'text-gray-700'} `}>
                  <h1 className="font-bold text-lg">{item?.name}</h1>
                  <h1>per price - {item?.sale_price} kyats</h1>
                  <h1>unit - {item?.unit}</h1>
                  <p>qunatity - {item?.quantity}</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                <p>Total price</p>
                <span>{item?.quantity * item?.sale_price} kyats</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Items;
