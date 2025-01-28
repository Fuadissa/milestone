import Image from "next/image";
import React from "react";

export const Successful = () => {
  return (
    <>
      <div className="w-fit bg-white bg-opacity-[0.05] backdrop-filter rounded-3xl shadow-lg flex justify-center items-center m-auto">
        <div className="flex flex-col justify-between items-center w-[100%] gap-8 lg:my-16 lg:mx-32 md:m-20 m-12">
          <div className="relative lg:w-[20rem] lg:h-[17rem] md:w-[16rem] md:h-[15rem] w-[100%] h-[14rem]">
            <Image
              src="/nft.png"
              alt="nft"
              layout="fill"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="md:text-lg text-base">CONGRATULATIONS</span>
            <span className="md:text-3xl md:text-[2rem] font-bold text-xl">
              SUCCEFULLY MINTED!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
