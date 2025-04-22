import React from 'react'


import { Poppins } from "next/font/google";;
const poppins = Poppins({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
});

export default function TourzCard({ tourzSvg, tourzupper, tourzlower }) {


    return (

        <>
            <div className={`${poppins.className} tCard w-[300px]`}>
                <div className="tSvg w-[50px] h-[50px] text-[#EB662B]">
                    {tourzSvg}
                </div>

                <div className="tCon mt-[25px]">
                    <span className="text-[13px] font-[500] text-[#05073C]">
                        {tourzupper}
                    </span>

                    <p className="mt-[5px] text-[10px] w-[75%] leading-4 text-[#05073C]">
                        {tourzlower}
                    </p>
                </div>
            </div>
        </>

    )


}