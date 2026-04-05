import React from 'react'
import { HiPlus } from "react-icons/hi";
import { Link } from 'react-router-dom';

const AddButton = () => {
  return (
    <>
      <Link to={'/add-expenses'}>
        <button className="group w-full xl:w-auto h-full flex justify-center items-center gap-1 text-lg font-semibold text-[#800f2f] bg-[#ffccd5] pr-2 pl-3 py-2 rounded hover:bg-[#ff8fa3] cursor-pointer">
          Add <HiPlus className="text-xl font-semibold group-hover:rotate-360" />
        </button>
      </Link>
    </>
  );
};

export default AddButton;