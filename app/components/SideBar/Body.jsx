"use client";

import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { GiStoneBlock } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Body = () => {
  const sideBarItems = [
    {
      label: "Home",
      href: "/",
      icon: <TiHome />,
    },
    {
      label: "Products",
      href: "/about",
      icon: <GiStoneBlock />,
    },
    {
      label: "Service",
      href: "/service",
      icon: <BiSolidDish />,
    },
    {
      label: "Documents",
      href: "/document",
      icon: <HiDocumentText />,
    },
  ];
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full justify-center font-semibold text-zinc-500 gap-3 border-b">
      {sideBarItems.map((item) => {
        return (
          <Link href={item.href}>
            <button
              className={` ${
                pathname === item.href
                  ? "text-purple-600 bg-purple-100 border-r-2 border-purple-500"
                  : ""
              } hover:text-purple-600 transition duration-300 hover:bg-purple-100 hover:border-r-2 hover:border-purple-500 flex items-center py-3 rounded-sm gap-3 text-lg w-full px-10`}
            >
              {item.icon}
              {item.label}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
