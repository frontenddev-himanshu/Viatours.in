import Image from "next/image";
import React from "react";

export default function Loc({ locImg, locAlt, upperText, lowerText }) {
    return (
        <>
            <div className="locBox flex gap-2 text-start items-center">
                <div className="locImg h-[40px] w-[40px]">
                    <Image
                        src={locImg}
                        alt={locAlt}
                        className="hBg w-full h-full object-cover rounded-[10px] relative"
                    />
                </div>
                <div className="locCon">
                    <span className="text-[10px] text-[#05073C]">{upperText}</span>
                    <p className="text-[10px] text-[#717171]">{lowerText}</p>
                </div>
            </div>
        </>
    )
}