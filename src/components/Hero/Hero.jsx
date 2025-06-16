import React from "react";
import Typewriter from "typewriter-effect";
import DropdownSelect from "../DropdownSelect/DropdownSelect";

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
            <div className="hero-heading pb-[40px] font-bold font-normal text-[56px] leading-[66px] max-md:text-[37px] max-md:leading-[41px] max-xxsm:!text-[27px] max-xxsm:!leading-[31px]">
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
            </div>
            <DropdownSelect onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
