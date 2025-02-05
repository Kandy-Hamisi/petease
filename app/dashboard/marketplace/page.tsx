// import { MarketPlace, TopSellerProfile } from "@/components";
import Image from "next/image";
import React from "react";
import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import { topSellingPeteasers } from "@/lib/data";
import TopSellerProfile from "@/components/topSellerProfile/TopSellerProfile";
import MarketPlace from "@/components/centerContent/marketPlace/MarketPlace";

const MarketPlacePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-2 bg-peteaseGrey p-4 border-2 border-peteaseLightGrey rounded-lg text-peteaseBlue">
        <button className="p-1.5 text-sm rounded-md border-peteaseYellow border">
          Feeds
        </button>
        <button className="p-1.5 text-sm rounded-md border-peteaseLightGrey border">
          Outfit
        </button>
        <button className="p-1.5 text-sm rounded-md border-peteaseLightGrey border">
          Pet Walkers
        </button>
        <button className="p-1.5 text-sm rounded-md border-peteaseLightGrey border">
          Pets
        </button>
      </div>

      {/* another */}
      <div className="bg-peteaseGrey  p-4 border-2 border-peteaseLightGrey rounded-lg text-peteaseBlue">
        <div className="flex items-center justify-between mb-3">
          <h5 className="font-semibold">Top #3 Sellers</h5>
          <span className="flex items-center gap-2 text-xs text-peteaseYellow">
            <FaLocationPinLock />
            Mombasa, Kenya
          </span>
        </div>
        <div className="flex items-center gap-6">
          {topSellingPeteasers.map((seller) => (
            <TopSellerProfile key={seller.userHandle} />
          ))}
        </div>
      </div>

      {/* The products under the specific selections */}
      <section>
        <MarketPlace />
      </section>
    </div>
  );
};

export default MarketPlacePage;
