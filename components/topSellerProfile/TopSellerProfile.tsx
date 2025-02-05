import React from "react";
import Image from "next/image";

const TopSellerProfile = () => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <Image
        src="/maine-coon.jpg"
        alt=""
        width={50}
        height={50}
        className="object-cover w-16 h-16 rounded-full"
      />
      <div className="flex items-center gap-2 mt-2">
        <h6 className="text-xs font-bold text-center">Maine Coon</h6>
      </div>
    </div>
  );
};
export default TopSellerProfile;
