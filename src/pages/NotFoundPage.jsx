import React from 'react'
import { TbScreenShareOff } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#ffccd5] flex justify-center items-center flex-col gap-2">
        <TbScreenShareOff className="text-6xl text-[#a4133c]" />
        <p className="text-4xl text-[#a4133c] font-bold">
          Page Doesn't Exists!
        </p>
        <Link to={'/'}>
          <button className="group flex justify-center items-center gap-1 py-2 pl-3 pr-4 bg-[#a4133c] text-[#fff0f3] text-xl rounded hover:bg-[#ff758f] hover:text-[#800f2f] cursor-point">
            <IoArrowBack className="group-hover:rotate-45" /> Back
          </button>
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage