import LocBox from "@/components/Loc";
import Image from "next/image";
import HeroBg from "@/images/heroBg.jpg";
import React from "react";

import LocImg1 from "@/images/loc1.jpg";
import LocImg2 from "@/images/loc2.jpg";
import LocImg3 from "@/images/loc3.jpg";
import SearchBtn from "@/components/Sbtn";
import TourzCard from "@/components/TourzCard";
import TrendingCard from "@/components/TrendingCard";
import Paris from "@/images/paris.jpeg";
import PopularCard from "@/components/PopularCard";
import Singapor from "@/images/singapor.jpg";
import Roma from "@/images/roma.jpg";
import Bangkok from "@/images/bangkok.jpg";
import Bali from "@/images/bali.jpg";
import Phuket from "@/images/phuket.jpg";
import Cappadocisa from "@/images/capp.jpg";
import Tokyo from "@/images/tokyo.jpg";
import pop1 from "@/images/pop-1.jpg";
import pop2 from "@/images/pop-2.jpg";
import pop3 from "@/images/pop-3.jpg";
import pop4 from "@/images/pop-4.jpg";
import Grab from "@/images/grab.jpg";
import BookBtn from "@/components/bookNow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket,
  faParachuteBox,
  faGem,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const Ticket = <FontAwesomeIcon icon={faTicket} />;
const parasuit = <FontAwesomeIcon icon={faParachuteBox} />;
const dimound = <FontAwesomeIcon icon={faGem} />;
const award = <FontAwesomeIcon icon={faAward} />;

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="heroSection w-full h-[60vh]">
        <div className="heroBg px-[5rem] w-full h-full relative overflow-hidden">
          <div className="heroImg w-full h-full relative">
            <Image
              src={HeroBg}
              alt="heroBg"
              className="hBg w-full h-full object-cover rounded-2xl relative"
            />
          </div>

          <div className="custom-shape-divider-bottom-1745244864">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>

          <div
            className={`${poppins.className} heroContent absolute flex flex-col justify-center items-center text-center`}
          >
            <h1 className="text-5xl font-bold text-white">Your World Of Joy</h1>
            <p className="text-[12px] text-white mt-4">
              From local escapes to far-flung adventures, find what makes you
              happy anytime, anywhere.
            </p>

            <div className="loc flex mt-10 gap-5 bg-[#ffffff] px-5 py-2 rounded-[10px]">
              <LocBox
                locImg={LocImg1}
                locAlt={"Where"}
                upperText={"Where"}
                lowerText={"Search Destination"}
              />

              <LocBox
                locImg={LocImg2}
                locAlt={"When"}
                upperText={"When"}
                lowerText={"February 05 - March - 14"}
              />

              <LocBox
                locImg={LocImg3}
                locAlt={"Tour Type"}
                upperText={"Tour Type"}
                lowerText={"All Tour"}
              />

              <div className="sBtn flex items-center justify-center">
                <SearchBtn />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* choose tourz */}
      <div
        className={`${poppins.className} tourzContainer w-full px-[20rem] mt-[80px]`}
      >
        <div className="tourzWrapper">
          <div className="tourzHead">
            <h2 className="text-[#05073C] text-[1.3rem] font-[700]">
              Why Choose Tourz
            </h2>
          </div>
        </div>

        <div className="tourzCon mt-[30px]">
          <div className="tourzCardContainer flex justify-between">
            <TourzCard
              tourzSvg={Ticket}
              tourzupper={"Ultimate flexibility"}
              tourzlower={
                "You're in control, with free cancellation and payment options to satisfy any plan or budget."
              }
            />

            <TourzCard
              tourzSvg={parasuit}
              tourzupper={"Memorable experiences"}
              tourzlower={
                "Browse and book tours and activities so incredible, you'll want to tell your friends."
              }
            />

            <TourzCard
              tourzSvg={dimound}
              tourzupper={"Quality at our core"}
              tourzlower={
                "New price? New plan? No problem.We're here to help, 24/7."
              }
            />

            <TourzCard
              tourzSvg={award}
              tourzupper={"Award-winning support"}
              tourzlower={
                "New price? New plan? No problem.We're here to help, 24/7."
              }
            />
          </div>
        </div>
      </div>

      {/* trending */}
      <div
        className={`${poppins.className} trendingContainer w-full px-[20rem] mt-[80px]`}
      >
        <div className="trendingWrapper">
          <div className="trendingHeading">
            <h2 className="text-[#05073C] text-[1.3rem] font-[700]">
              {" "}
              Trending destinations
            </h2>
          </div>
        </div>

        <div className="trendingCon">
          <div className="trendingImgs flex justify-between mt-[30px]">
            <TrendingCard
              trnI={Paris}
              trnUpper={"Paris"}
              trnAlt={"Eiffel Tower"}
              trnLower={"100+ Tours"}
            />

            <TrendingCard
              trnI={Singapor}
              trnUpper={"Singapore"}
              trnAlt={"Eiffel Tower"}
              trnLower={"300+ Tours"}
            />

            <TrendingCard
              trnI={Roma}
              trnUpper={"Roma"}
              trnAlt={"Eiffel Tower"}
              trnLower={"400+ Tours"}
            />

            <TrendingCard
              trnI={Bangkok}
              trnUpper={"Bangkok"}
              trnAlt={"Eiffel Tower"}
              trnLower={"100+ Tours"}
            />

            <TrendingCard
              trnI={Bali}
              trnUpper={"Bali"}
              trnAlt={"Eiffel Tower"}
              trnLower={"100+ Tours"}
            />

            <TrendingCard
              trnI={Phuket}
              trnUpper={"Phuket"}
              trnAlt={"Eiffel Tower"}
              trnLower={"200+ Tours"}
            />

            <TrendingCard
              trnI={Tokyo}
              trnUpper={"Tokyo"}
              trnAlt={"Eiffel Tower"}
              trnLower={"700+ Tours"}
            />

            <TrendingCard
              trnI={Cappadocisa}
              trnUpper={"Cappadocisa"}
              trnAlt={"Eiffel Tower"}
              trnLower={"900+ Tours"}
            />
          </div>
        </div>
      </div>

      {/* popular */}
      <div
        className={`${poppins.className} popularContainer w-full px-[20rem] mt-[80px]`}
      >
        <div className="popularWrapper">
          <div className="popularHeading">
            <h2 className="text-[#05073C] text-[1.3rem] font-[700]">

              Popular destinations
            </h2>
          </div>
        </div>

        <div className="popularCon">
          <div className="popularImgs flex justify-between mt-[30px]">

            <PopularCard popImg={pop1} popAlt={"Paris, France"} popLoc={"Paris, France"} popTitle={"Centipede Tour - Guided Arizona Desert Tour by ATV"} popRating={"4.8 (243)"} popDays={"4 days"} popPrice={"$189.25"} />


            <PopularCard popImg={pop2} popAlt={"New York, USA"} popLoc={"Paris, France"} popTitle={"Molokini and Turtle Town Snorkeling Adventure Aboard"} popRating={"4.8 (243)"} popDays={"4 days"} popPrice={"$225"} />


            <PopularCard popImg={pop3} popAlt={"London, UK"} popLoc={"Paris, France"} popTitle={"Westminster Walking Tour & Westminster Abbey Entry"} popRating={"4.8 (243)"} popDays={"4 days"} popPrice={"$943"} />


            <PopularCard popImg={pop4} popAlt={"New York, USA"} popLoc={"Paris, France"} popTitle={"All Inclusive Ultimate Circle Islandv Day Tour with Lunch"} popRating={"4.8 (243)"} popDays={"4 days"} popPrice={"$771"} />


          </div>



          <div className="popularImgs flex justify-between mt-[30px]">

            <PopularCard popImg={pop1} popAlt={"Paris, France"} popLoc={"Paris, France"} popTitle={"Space Center Houston Admission Ticket"} popRating={"4.8 (243)"} popDays={"4 days"} popPrice={"$189.25"} />


            <PopularCard popImg={pop2} popAlt={"New York, USA"} popLoc={"Paris, France"} popTitle={"Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area"} popRating={"4.8 (243)"} popDays={"4 days"} popPrice={"$225"} />


            <PopularCard popImg={pop3} popAlt={"London, UK"} popLoc={"Paris, France"} popTitle={"History and Hauntings of Salem Guided Walking Tour"} popRating={"4.8 (243)"} popDays={"4 days"} popPrice={"$943"} />


            <PopularCard popImg={pop4} popAlt={"New York, USA"} popLoc={"Paris, France"} popTitle={"Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up"} popRating={"4.8 (243)"} popDays={"4 days"} popPrice={"$771"} />


          </div>
        </div>
      </div>




      {/* grab */}
      <div className="grabContainer w-full px-[5rem] mt-[80px]">
        <div className="grabWrapper w-full h-[50vh] rounded-[20px] relative overflow-hidden">
          <div className="grabbg w-full h-full relative">
            <Image
              src={Grab}
              alt="heroBg"
              className="hBg w-full h-full object-cover rounded-2xl relative"
            />

            <div className="grabCon absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-[#00000028]">
              <div
                className={`${poppins.className} grabContent flex flex-col justify-center items-center text-center h-full`}
              >
                <h1 className="text-5xl font-bold text-white w-[40%]">
                  Grab up to 35% off
                  on your favorite
                  Destination
                </h1>
                <p className="text-[12px] text-white mt-4">
                  Limited time offer, don't miss the opportunity
                </p>

                <div className="grabBtn flex items-center justify-center mt-10">
                  <BookBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
