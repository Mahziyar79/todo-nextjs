import React from "react";
import Image from "next/image";
import banner from "../assets/images/banner.jpg";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] z-2">
      {/* {banner} */}
      <Image alt="Banner" src={banner} layout="fill" objectFit="cover" />
      <div className="absolute font-semibold text-white w-full top-[40%] text-center">
        <p className="text-lg sm:text-2xl">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
