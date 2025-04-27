import Image from "next/image"

export default function ReviewCard({ customerImg, customerAlt, customerName, customerText, customerSecName, customerRole }) {

    return (

        <>

            <div className="reviewCard w-[40%] flex flex-col justify-between items-center bg-[#fff] rounded-[10px]  relative overflow-hidden">
                <div className="reviewImg h-[100px] w-[100px] rounded-[50%] overflow-hidden relative">
                    <Image
                        src={customerImg}
                        alt={customerAlt}
                        className="hBg w-full h-full object-cover  relative"
                    />
                </div>

                <div className="reviewContent mt-[30px] flex flex-col justify-center items-center text-center">
                    <span className="customerName text-[#EB662B] text-[14px]">
                        {customerName}
                    </span>

                    <p className="customerText text-[#05073C] text-[15px] m-[20px] font-[500]">
                        {customerText}
                    </p>

                    <span className="customerSecName text-[#05073C] text-[12px] font-[500]">{customerSecName}</span>

                    <span className="customerRole text-[#05073C] text-[10px]">{customerRole}</span>
                </div>
            </div>


        </>

    )


}