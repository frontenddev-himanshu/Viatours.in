import Image from "next/image";
import React from "react";


export default function PopularCard({popImg, popAlt, popLoc, popTitle, popRating, popDays, popPrice}) {
  return (
    <>
      <div className="popularCard w-[300px] p-2 border-[#E7E6E6] border-[1px] rounded-[10px]">
        <div className="popularI w-[100%] h-[150px] rounded-[10px] overflow-hidden">
          <Image
            src={popImg}
            alt={popAlt}
            className="hBg w-full h-full object-cover rounded-[5px] relative"
          />
        </div>

        <div className="popularCon mt-3">
          <span className="popLoc text-[12px] text-[#717171]">{popLoc}</span>
          <p className="popTitle text-[15px] text-[#05073C] font-[500] leading-[24px] py-2">
            {popTitle}
          </p>
          <span className="popRating text-[12px] text-[#05073C]">{popRating}</span>
          <div className="priceP flex justify-between items-center mt-2 border-[#E7E6E6] border-t-[1px] pt-3">
            <span className="popDays text-[12px] text-[#05073C]">{popDays}</span>

            <span className="popPrice text-[12px] text-[#05073C]">
              From <span className="font-[600]">{popPrice}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
