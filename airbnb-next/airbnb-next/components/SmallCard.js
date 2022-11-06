import Image from "next/image";
import React from "react";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 m-5 ml-2 rounded-xl hover:scale-105 transition durition-150 ease-out">
      {/* left */}
      <div className="relative w-16 h-16">
        {/* <Image src={img} alt="exploreItem-img" layout="fill" /> */}
        <img src={img} alt="exploreItem-img" className="rounded-lg" />
      </div>

      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
