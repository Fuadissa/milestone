import Image from "next/image";
import React from "react";

export const Successful = () => {
  return (
    <>
      <div className="lg:w-[60%] lg:h-[80vh] md:w-[80%] md:h-[60vh] w-[80%] h-[40vh] bg-white bg-opacity-[0.05] backdrop-filter  rounded-3xl shadow-lg flex justify-center items-center place-self-center md:mt-20 lg:mt-0 mt-[30%]">
        <div className="flex flex-col justify-between items-center w-[100%] lg:px-12 md:px-8 gap-8">
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
