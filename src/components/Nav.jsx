'use client'

import React from 'react';
import LoginBtn from "@/components/Loginbtn";
import { Poppins } from "next/font/google";
import { useState } from "react";
const poppins = Poppins({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
});


export default function Nav() {

    const [isOpen, setOpen] = useState(false);

    const toggelMenue = () => {
        setOpen(prev => !prev);
    }

    return (

        <>
            <nav className={`flex justify-between items-center bg-[#ffffff] h-[7vh] px-[20rem] ${poppins.className} relative`}>

                <div className="navLeft flex items-center gap-20">
                    <div className="logo">
                        <h2 className="font-[600] text-[25px] text-[#EB662B] ">viatours</h2>
                    </div>


                    <div className="srchUpper">
                        <span className="text-[12px] text-[#757575]">Search destinations or activities</span>
                    </div>
                </div>

                <div className={`navRight flex items-center gap-9 ${isOpen ? 'open': ''}`}>
                    <div className="Links">
                        <ul className="flex gap-10 text-[13px] font-[500] text-[#05073C]">
                            <li>Destination</li>
                            <li>Activites</li>
                            <li>USD</li>
                            <li>Sign Up</li>
                        </ul>
                    </div>


                    <div className="login">
                        <LoginBtn />
                    </div>
                </div>

                <div className="hamb cursor-pointer" onClick={toggelMenue}>
                    <div className="line w-[40px] h-[2px] bg-[#05073C]"></div>
                    <div className="line  w-[40px] h-[2px] bg-[#05073C] my-[6px]"></div>
                    <div className="line  w-[40px] h-[2px] bg-[#05073C]"></div>
                </div>

            </nav>

        </>

    )


}