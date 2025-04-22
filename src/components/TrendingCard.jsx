import React from 'react';
import Image from 'next/image';

export default function TrendingCard({ trnI, trnUpper, trnAlt, trnLower }) {

    return (

        <>
        
        <div className="trnCard flex flex-col items-center">
            <div className="trnImg w-[100px] h-[100px] rounded-[50%] overflow-hidden">
                <Image
                    src={trnI}
                    alt={trnAlt}
                    className="hBg w-full h-full object-cover rounded-[10px] relative"
                />
            </div>
            <div className="trnContent text-center mt-3">
                <span className='text-[12px] font-[500] text-[#05073C]'>{trnUpper}</span>
                <p className="text-[10px] text-[#05073C]">{trnLower}</p>
            </div>
        </div>
        
        </>


    )


}