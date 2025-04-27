import Image from "next/image"

export default function TravelCard({ travelImg, travelTips, travelDate, travelBy, travelTitle }) {

    return (
        <div className="travel-card w-[32%]  rounded-[10px]">
            <div className="travelImg h-[250px] w-[100%] rounded-[10px] overflow-hidden relative">
                <Image
                    src={travelImg}
                    alt="Travel Image"
                    className="w-full h-[100%] object-cover"
                />

                <div className="travelImgCover absolute top-[20px] left-[20px] bg-[#ffffff] rounded-[20px] px-[20px] py-[5px] text-[10px]">
                    {travelTips}
                </div>
            </div>
            <div className="travelContent mt-[20px]">
                <div className="travelUpper flex">
                    <p className="text-[#05073C] text-[10px] border-r-1 border-[#E7E6E6] pr-2">{travelDate}</p>

                    <p className="text-[#05073C] text-[10px] pl-2">{travelBy}</p>
                </div>

                <p className="text-[#05073C] text-[13px] font-[600] mt-[10px]">{travelTitle}</p>
            </div>
        </div>
    );

}