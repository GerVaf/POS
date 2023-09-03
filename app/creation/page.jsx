"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductForm from "./components/product/ProductForm";
import BrandForm from "./components/brand/BrandFrom";
import StockForm from "./components/stock/StockForm";
import ProductShow from "./components/product/ProductShow";
import BrandShow from "./components/brand/BrandShow";
import StockShow from "./components/stock/StockShow";
const Creation = () => {
  // for refresh
  const [refresh, setRefresh] = useState(false);
  // for title
  const [path, setPath] = useState([
    { label: "Product", active: true, icon: null },
    { label: "Brand", active: false, icon: null },
    { label: "Stock", active: false, icon: null },
  ]);

  const handleLabelClick = (clickedLabel) => {
    const updatedPath = path.map((ech) => ({
      ...ech,
      active: ech.label === clickedLabel,
    }));
    setPath(updatedPath);
  };

  return (
    <div className="p-10 h-full flex flex-col gap-5">
      {/* title description */}
      <div className="text-purple-600 h-[10%]">
        <h1 className="font-bold text-xl">Description!</h1>
        <p className="font-semibold text-lg pl-5">
          Our user-friendly features put you in control, allowing you to
          efficiently handle product listings, stock levels, and brand identity
          all in one place. Streamline your operations and bring your vision to
          life with our comprehensive toolkit.
        </p>
      </div>
      <div className="h-[90%] ">
        {/* label title  */}
        <div className="flex">
          {path?.map((ech) => {
            return (
              <motion.div
                key={ech.label}
                className={`px-10 text-gray-500 py-3 rounded-t-lg font-bold cursor-pointer mr-2 ${
                  ech.active === true && "text-purple-500"
                }`}
                onClick={() => handleLabelClick(ech.label)}
                initial={{ backgroundColor: "rgb(233,213,255)" }}
                animate={{
                  backgroundColor: ech?.active
                    ? "rgb(241,245,249)"
                    : "rgb(248,250,252)",
                }}
                transition={{ duration: 0.3 }}
              >
                {ech?.label}
              </motion.div>
            );
          })}
        </div>
        {/* item creation form */}
        <div className="h-[95%] bg-slate-100 rounded-b-lg rounded-se-lg  flex">
          {path.map((ech) => {
            if (ech.active) {
              switch (ech.label) {
                case "Product":
                  return (
                    <ProductForm
                      key="product-form"
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                  );
                case "Brand":
                  return (
                    <BrandForm
                      key="brand-form"
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                  );
                case "Stock":
                  return (
                    <StockForm
                      key="stock-form"
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                  );
                default:
                  return null;
              }
            }
            return null;
          })}
          <div className="w-4/12 bg-white overflow-y-scroll ">
            {path.map((ech) => {
              if (ech.active) {
                switch (ech.label) {
                  case "Product":
                    return (
                      <ProductShow
                        key="product-show"
                        setRefresh={setRefresh}
                        refresh={refresh}
                      />
                    );
                  case "Brand":
                    return (
                      <BrandShow
                        key="brand-show"
                        setRefresh={setRefresh}
                        refresh={refresh}
                      />
                    );
                  case "Stock":
                    return (
                      <StockShow
                        key="stock-show"
                        setRefresh={setRefresh}
                        refresh={refresh}
                      />
                    );
                  default:
                    return null;
                }
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creation;
