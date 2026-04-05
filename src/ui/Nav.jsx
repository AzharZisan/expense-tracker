import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className="w-full h-auto fixed top-0 z-10000 text-center p-4 bg-[#ffb3c1] text-[#590d22] text-xl font-bold border-b-2 border-[#590d22] flex justify-center items-center gap-2 md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
        Expense Tracker
        <span className="text-[10px] beta-gradient text-[#fff0f3] font-normal py-0.5 px-2 rounded-xl md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
          BETA
        </span>
      </nav>
    </>
  );
}

export default Nav