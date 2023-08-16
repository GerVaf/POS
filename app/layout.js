import { Providers } from "./Global/provider";
import SideBar from "./components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Point of Sale",
  description: "Written By HashTag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-[100vh]">
            <div className="w-2/12 ">
              <SideBar />
            </div>
            <div className="w-10/12 my-5 mr-5 rounded-lg bg-gradient-to-b from-purple-200 to-slate-100 overflow-y-scroll p-5">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
