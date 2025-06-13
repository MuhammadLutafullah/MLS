import React from "react";
import Select from "react-select";
import Typewriter from "typewriter-effect";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import LineChart from "../GaugeChart/LineChart";
import BarChart from "../GaugeChart/BarChart";
import DoughnutChart from "../GaugeChart/DoughnutChart";

const Hero = () => {
  // Handle selection change
  const handleChange = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

  return (
    <div className="hero-otr pt-[96px] max-sm:pt-[40px]">
      <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
        <div className="hero-inr flex justify-center items-center gap-[40px] max-md:gap-[20px] max-md:pr-[23px] max-sm:flex-col-reverse max-sm:!pr-[0px]">
          <div className="hero-content  text-center">
            <p className="hero-heading pb-[40px] font-bold font-normal text-[56px] leading-[66px] max-md:text-[37px] max-md:leading-[41px] max-xxsm:!text-[27px] max-xxsm:!leading-[31px]">
              1960/Cypress Housing Market
              <Typewriter
                options={{
                  strings: [
                    "Real Estate Trends",
                    "Housing Market Analysis",
                    "Property Listings",
                    "Home Values",
                    "Neighborhood Insights",
                    "Market Statistics",
                    "Investment Opportunities",
                    "Local Housing Data",
                    "For Sale in 1960/Cypress",
                    "Affordable Homes",
                    "Luxury Properties",
                    "First-Time Buyers",
                    "Relocation Guide",
                    "Mortgage Rates",
                    "New Listings Alert",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </p>
            <DropdownSelect onChange={handleChange} />
            {/* <LineChart />
            <BarChart /> */}
            <DoughnutChart />

            {/* <p className="parallex-desc py-[27px] max-md:py-[15px] font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
              I use parallax animation on my hero image and specialize in
              turning ideas into reality. With 4 years of pure experience as a
              frontend developer, I am skilled in customizing and editing
              Next.js and React libraries to create pixel-perfect, fully
              responsive websites. My past projects showcase seamless
              adaptability and exceptional performance across all devices.
            </p> */}
            {/* <div className="action-otr flex max-sm:justify-center">
              <div className="action-inr h-[50px] overflow-hidden  cursor-pointer text-[18px] max-xxsm:text-[15px] font-medium font-normal leading-[30px] text-white py-[10px] px-[24px] rounded-[8px] bg-slate-950">
                <p className="btn-default-txt">Download CV</p>
                <p className="pt-[11px] btn-hover-txt">One Click Away</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
