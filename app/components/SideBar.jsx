'use client'
import Body from "./SideBar/Body";
import Foot from "./SideBar/Foot";
import Head from "./SideBar/Head";

const SideBar = () => {
  return (
    <div className='flex flex-col h-full '>
      <div className='h-1/5'>
        <Head />
      </div>
      <div className='h-2/5'>
        <Body />
      </div>
      <div className='h-2/5'>
        <Foot />
      </div>
    </div>
  );
};

export default SideBar;
