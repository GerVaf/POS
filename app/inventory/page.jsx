"use client";
import { LuLayoutTemplate, LuBarChartHorizontal } from "react-icons/lu";
import { TbBrandAirtable } from "react-icons/tb";
import Link from "next/link";
const Inventory = () => {
  const path = [
    {
      label: "Creation",
      href: "/inventory/creation",
      icon: <LuLayoutTemplate />,
      description: "",
      note: "You can do all of management here!",

    },
    {
      label: "Brand",
      href: "/inventory/brand",
      icon: <TbBrandAirtable />,
      description: "",
      note: "brand CRUD and to checkout",
    },
    {
      label: "Stock",
      href: "/inventory/stock",
      icon: <LuBarChartHorizontal />,
      description: "stock CRUD and count item",
      note: "",
    },
  ];
  return (
    <div className="flex h-full mx-5">
      {path?.map((block) => {
        return (
          <Link
            key={block.label}
            className="w-2/6 bg-gray-50 mx-3 my-10 rounded-lg shadow-sm p-5 hover:text-gray-50 text-purple-600 hover:bg-purple-600 transition duration-200 group"
            href={block?.href}
          >

            <div className="  flex ">
              <p className="w-2/5 flex items-center justify-center h-[110px] text-[60px] group-hover:bg-gray-50 bg-purple-600 group-hover:text-purple-600 transition duration-200 rounded-lg text-gray-50">
                {block?.icon}
              </p>
              <div className="w-3/5 px-5 flex flex-col justify-around text-2xl font-bold">
                <p>{block?.label}</p> <span className="text-sm">{block?.note}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Inventory;
