import Image from "next/image";
import React from "react";
import LogoImage from "../../public/images/Logo.png";

function Header() {
  return (
    <div className="flex items-center justify-between bg-white p-5">
      <div className="container mx-auto xl:max-w-screen-2xl">
        <div>
          <Image src={LogoImage} alt="Logo Image" width={150} height={150} />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
