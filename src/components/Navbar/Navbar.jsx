import React, { useState, useEffect } from "react";
import logo from "../../images/Muhammad - Logo.svg";

const Navbar = ({
  onHomeClick,
  onAboutClick,
  onPortfolioClick,
  onContactClick,
  onWhyClick,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("about");
    const yOffset = -100;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  // Toggle the offcanvas menu
  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  // Handle scroll event to fix navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNav = (navigationFn) => {
    navigationFn();
    toggleOffcanvas();
  };

  return (
    <>
      <div
        className={`nav-otr border border-[#e5e5e5] transition-all duration-500 ${
          isFixed
            ? "fixed top-0 left-0 w-full z-50 bg-[#fffc] backdrop-blur-[10px] shadow-md"
            : ""
        }`}
        style={{ transitionProperty: "top, box-shadow, background-color" }}
      >
        <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
          <div className="nav-inr flex justify-between items-center">
            <div onClick={onHomeClick} className="logo-otr max-sm:py-[11px]">
              <p className="font-medium font-normal text-[18px] leading-[57px] cursor-pointer uppercase">
                refinedreport
              </p>
            </div>

            <div className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] cursor-pointer max-sm:flex hidden bg-[#555555] rounded-full  justify-center items-center">
              <button
                className="offcanvas-toggle text-[18px] font-medium"
                onClick={toggleOffcanvas}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                  className="w-[16px] h-[16px]"
                >
                  <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                </svg>
              </button>
            </div>

            <ul className="nav-ul max-sm:hidden flex gap-[40px]">
              <li className="nav-li">
                <a className="font-medium font-normal text-[18px] leading-[86px] cursor-pointer">
                  Item1
                </a>
              </li>
              <li className="nav-li">
                <a className="font-medium font-normal text-[18px] leading-[86px] cursor-pointer">
                  Item2
                </a>
              </li>
              <li className="nav-li">
                <a className="font-medium font-normal text-[18px] leading-[86px] cursor-pointer">
                  Item3
                </a>
              </li>
              <li className="nav-li">
                <a className="font-medium font-normal text-[18px] leading-[86px] cursor-pointer">
                  Item4
                </a>
              </li>
            </ul>

            <div className="action-otr max-sm:hidden block">
              <a href="">
                <div className="action-inr h-[50px] overflow-hidden cursor-pointer text-[18px] font-medium font-normal leading-[30px] text-white py-[10px] px-[24px] rounded-[8px] bg-slate-950">
                  <p className="btn-default-txt">Call Now</p>
                  <p className="pt-[11px] btn-hover-txt">Let's Talk</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`offcanvas-menu fixed top-0 right-0 h-full w-[300px] z-[99] bg-white shadow-lg transform transition-transform ${
          isOffcanvasOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-3">
          <p className="font-medium font-normal text-[18px] leading-[57px] cursor-pointer uppercase">
            refinedreport
          </p>
          <button
            className="offcanvas-close  text-[18px] font-medium"
            onClick={toggleOffcanvas}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[24px] h-[24px]"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </button>
        </div>
        <ul className="p-4">
          <li className="mb-4">
            <a className="text-[18px] font-medium cursor-pointer">Item1</a>
          </li>
          <li className="mb-4">
            <a className="text-[18px] font-medium cursor-pointer">Item2</a>
          </li>
          <li className="mb-4">
            <a className="text-[18px] font-medium cursor-pointer">Item3</a>
          </li>
          <li className="mb-4">
            <a className="text-[18px] font-medium cursor-pointer">Item4</a>
          </li>
          <div className="action-otr ">
            <a href="">
              <div className="action-inr mt-[43px] h-[50px] text-center overflow-hidden cursor-pointer text-[18px] font-medium font-normal leading-[30px] text-white py-[10px] px-[24px] rounded-[8px] bg-slate-950">
                <p className="btn-default-txt">Call Now</p>
                <p className="pt-[11px] btn-hover-txt">Let's Talk</p>
              </div>
            </a>
          </div>
        </ul>
      </div>

      {isOffcanvasOpen && (
        <div
          className="overlay fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleOffcanvas}
        ></div>
      )}
    </>
  );
};

export default Navbar;
