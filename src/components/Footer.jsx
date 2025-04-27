import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

import Image from "next/image";
import Payment from "@/images/pay.png";

export default function Footer() {
    return (
        <>
            <div
                className={`${poppins.className} footerContainer mt-[80px] px-[5rem] relative`}
            >
                <div className="footerWrapper bg-[#EB662B26]  relative px-[15rem] py-[60px]">
                    <div className="footerUpper flex justify-between items-center pb-[50px] pt-[50px] border-b-1 border-[#EB662B26]">
                        <div className="text-[14px] font-[500] speak">
                            <p className="text-[#05073C]">
                                Speak to our expert at
                                <span className="text-[#EB662B]">1-800-453-6744</span>
                            </p>
                        </div>

                        <div className="text-[12px] font-[500] text-[#05073C] foll">
                            <span>Follow Us</span>
                        </div>
                    </div>

                    <footer className="footerLower pt-[50px] flex justify-between">

                        <div className="footerLinks w-[300px]">
                            <h4 className="text-[#05073C] font-[500] text-[14px]">Contact</h4>

                            <ul className="mt-[10px] text-[#05073C] text-[12px] flex flex-col gap-[5px]">
                                <li>328 Queensberry Street, North Melbourne VIC3051,
                                    Australia.</li>

                                <li>hi@viatours.com</li>
                            </ul>
                        </div>

                        <div className="footerLinks w-[200px]">
                            <h4 className="text-[#05073C] font-[500] text-[14px]">Company</h4>

                            <ul className="mt-[10px] text-[#05073C] text-[12px] flex flex-col gap-[5px]">
                                <li>About Us</li>

                                <li>Tourz Reviews</li>

                                <li>Contact Us</li>
                                <li>Travel Guides</li>
                                <li>Data Policy</li>
                                <li>Cookie Policy</li>
                                <li>Legal</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>


                        <div className="footerLinks w-[200px]">
                            <h4 className="text-[#05073C] font-[500] text-[14px]">Support</h4>

                            <ul className="mt-[10px] text-[#05073C] text-[12px] flex flex-col gap-[5px]">
                                <li>Support</li>

                                <li>Get in Touch</li>

                                <li>Help center</li>
                                <li>Live chat</li>
                                <li>How it works</li>
                            </ul>
                        </div>

                        <div className="footerLinks w-[300px]">
                            <h4 className="text-[#05073C] font-[500] text-[14px]">Newsletter</h4>

                            <ul className="mt-[10px] text-[#05073C] text-[12px] flex flex-col gap-[5px]">
                                <li>Subscribe to the free newsletter and stay
                                    up to date</li>

                                <div className="footerInput relative mt-[10px]">
                                    <input type="text" placeholder="Enter your email" className="w-[100%] h-[40px] rounded-[5px] px-[10px] border-1 border-[#EB662B] outline-none" />

                                    <label htmlFor="email">Send</label>
                                </div>
                            </ul>

                            <div className="footerLinks w-[300px] mt-[20px]">
                                <h4 className="text-[#05073C] font-[500] text-[14px]">Mobile Apps</h4>

                                <ul className="mt-[10px] text-[#05073C] text-[12px] flex flex-col gap-[5px]">
                                    <li>iOS App</li>
                                    <li>Android App</li>
                                </ul>
                            </div>

                        </div>

                    </footer>
                </div>




                <div className="custom-shape-divider-top-1745766500">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className={`${poppins.className} 
             py-[20px] px-[20rem] flex justify-between items-center copyright `}>
                <p className="text-[10px]">
                    © Copyright 2024
                </p>

                <div className="payment w-[200px] h-[20px]">
                    <Image
                        src={Payment}
                        alt="Visa Logo"
                        className="h-[100%] w-[100%] object-cover"
                    />
                </div>

            </div>
        </>
    );
}
