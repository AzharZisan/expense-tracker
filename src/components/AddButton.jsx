import React from 'react'
import { IoMdAdd } from "react-icons/io";

const AddButton = () => {
  return (
    <>
      <button className="w-auto h-full flex justify-center items-center gap-1 text-xl font-semibold text-[#800f2f] bg-[#ffccd5] pr-3 pl-4 py-3 rounded hover:bg-[#ff8fa3] cursor-pointer">
        Add <IoMdAdd className="text-2xl font-semibold hover:rotate-360" />
      </button> 
    </>
  );
};

export default AddButton;