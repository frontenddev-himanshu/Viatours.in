import Image from "next/image";

import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});


export default function PopularImgs({ pImg1, pImg2, pImg3, title1, title2, title3 }) {

    return (

        <>

            <div className={`${poppins.className} imgesSection w-full h-[400px] flex justify-between items-center relative `}>
                <div className="leftImg w-[49%] h-[100%] flex flex-col justify-between">
                    <div className="upperImg h-[48%] relative rounded-[10px] overflow-hidden">
                        <Image
                            src={pImg1}
                            alt="Popular Image"
                            className="hBg w-full h-full object-cover  relative"
                        />

                        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#00000049] flex items-end p-[20px]">

                            <span className="text-[#fff]">
                                {title1}
                            </span>

                        </div>

                    </div>

                    <div className="lowerImg h-[48%] relative rounded-[10px] overflow-hidden">
                        <Image
                            src={pImg2}
                            alt="Popular Image"
                            className="hBg w-full h-full object-cover  relative"
                        />

                        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#00000049] flex items-end p-[20px]">

                            <span className="text-[#fff]">
                                {title2}
                            </span>

                        </div>
                    </div>
                </div>

                <div className="sideImg h-[100%] w-[48%] relative rounded-[10px] overflow-hidden">
                    <Image
                        src={pImg3}
                        alt="Popular Image"
                        className="hBg w-full h-full object-cover rounded-[10px] relative"
                    />

                    <div className="overlay absolute top-0 left-0 w-full h-full bg-[#00000049] flex items-end p-[20px]">

                        <span className="text-[#fff]">
                            {title3}
                        </span>

                    </div>
                </div>
            </div>

        </>

    )

}