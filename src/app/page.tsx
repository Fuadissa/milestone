import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="lg:w-[60%] lg:h-[80vh] md:w-[80%] md:h-[60vh] w-[80%] h-[57vh] bg-white bg-opacity-[0.05] backdrop-filter  rounded-3xl shadow-lg flex justify-center items-center place-self-center md:mt-20 lg:mt-0 mt-[25%]">
        <div className="flex flex-col md:flex-row justify-between items-center w-[100%] lg:px-12 md:px-8 gap-8">
          <div className="relative lg:w-[18rem] lg:h-[15rem] md:w-[16rem] md:h-[15rem] w-[100%] h-[14rem]">
            <Image
              src="/nft.png"
              alt="nft"
              layout="fill"
              className="object-contain"
            />
          </div>
          <div className="border border-white/50 rounded-2xl lg:h-[12rem] md:h-[10rem] md:w-[50%] w-[90%] h-[12rem] flex justify-between flex-col items-start px-5 py-5">
            <div>
              <div className="flex items-center">
                <span className="text-white/50 font-thin">500</span>
                <span className="text-3xl font-bold"> / </span>
                <span className="font-bold">500</span>
              </div>
              <div className="lg:text-2xl md:font-lg font-bold">
                <span>MONADMILESTONENFT</span>
              </div>
            </div>

            <div className="flex justify-between items-center w-[100%]">
              <div className="lg:w-[53%] py-2 border border-white/50 items-center rounded-xl flex justify-between px-4 md:w-[45%] w-[40%]">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>

              <button className="lg:w-[45%] md:w-[53%] bg-white text-black rounded-xl py-2 px-4 md:text-xs lg:text-sm w-[55%]">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
