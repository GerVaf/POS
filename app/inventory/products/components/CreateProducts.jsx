import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const CreateProducts = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" ">
      {/* Modal toggle */}
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className=""
        onClick={() => setToggle(true)}
        type="button"
      >
        <div className=" w-16 h-16 bg-violet-500 text-white rounded-full flex  justify-center items-center cursor-pointer">
          <AiOutlinePlus size={20} />
        </div>
      </button>
      {/* Main modal */}

      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed top-16 left-0 right-0 z-50 ${
          !toggle && "hidden"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full `}
      >
        <div className="relative w-full max-w-md max-h-full">
          {/* Modal content */}
          <div
            className=" relative  bg-black/80   backdrop-blur-sm  rounded-lg shadow  top-[100%] left-[100%] w-full   
        "
          >
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={() => setToggle(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-white">
                Create Form
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-transparent  text-white"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="brandName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Brand Name
                  </label>
                  <input
                    type="text"
                    name="brandName"
                    id="brandName"
                    placeholder="Enter BrandName"
                    className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-transparent   text-white"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="totalStock"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Total Stock
                  </label>
                  <input
                    type="text"
                    name="totalStock"
                    id="totalStock"
                    placeholder="Enter BrandName"
                    className=" border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-transparent "
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Total Stock
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Enter BrandName"
                    className=" border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-transparent "
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700/60 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
