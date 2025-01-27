import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="place-self-center flex justify-between w-[100%] lg:px-36 md:px-24 py-6 px-2 items-center">
      <div className="flex gap-1 items-center text-2xl font-medium">
        <Image src="/monabg.png" alt="logo" width={55} height={55} />
        <span className=" leading-[1.3rem] lg:text-[1.6rem] text-base font-[500]">
          <span className="hidden md:inline-block">MONAD</span> MILESTONE NFT
        </span>
      </div>
      <div>
        <button className="lg:py-3 py-1 text-black bg-white lg:rounded-3xl lg:font-medium lg:px-10 px-6 text-sm rounded-xl">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};
