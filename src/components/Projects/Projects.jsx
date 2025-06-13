import React from "react";
import Tilt from "react-parallax-tilt";
import "./Projects.css";
import mursImg from "../../images/murs-preview-img.webp";
import ethixImg from "../../images/ethix-preview-img.webp";
import rageImg from "../../images/rage-preview-img.webp";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MURS Digital Artwork",
      description:
        "The main purpose of the MURS project is to sell digital artwork, providing a platform for artists to showcase and sell their creations to a global audience.",
      imgSrc: mursImg,
      liveLink: "https://nft-artwork-web.surge.sh/theme/index.html",
    },
    {
      id: 2,
      title: "Ethix – NFT Marketplace",
      description:
        "The Ethix project is a platform for NFT artwork, where users can participate in live auctions. Artists showcase their creations, and buyers engage in real-time bidding for unique NFTs.",
      imgSrc: ethixImg,
      liveLink: "https://ethix-nftmarketplace.surge.sh/theme/index.html",
    },
    {
      id: 2,
      title: "RAGE – Gaming Project",
      description:
        "Rage is a live-stream platform for gamers to watch streams and track player rankings. It offers real-time updates for an immersive gaming experience.",
      imgSrc: rageImg,
      liveLink: "https://livestream-gamingwebsite.surge.sh/theme/index.html",
    },
    // Add more project objects as needed
  ];
  return (
    <>
      <div className="pt-[96px] max-sm:pt-[40px] ">
        <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
          <div className="text-center ">
            <p className="hero-heading font-bold  text-[40px] leading-[50px] max-md:text-[27px] max-md:leading-[37px] ]">
              My Portfolio
            </p>
            <p className="parallex-desc py-[27px] max-md:py-[15px] font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
              All my work is showcased below. Click on "Live Preview" to explore
              my projects. These projects are built using technologies like
              React, Next.js, Tailwind CSS, Bootstrap, Daisy UI, MUI, Framer
              Motion, Tilt.js, and SCSS, showcasing my expertise and commitment
              to delivering innovative, high-quality solutions.
            </p>
          </div>
          <div className="flex  gap-[15px] flex-wrap max-1440:justify-center">
            {projects.map((project) => (
              <div
                key={project.id}
                className="box-otr w-[455px] min-h-[576px] max-msm:w-[100%] max-msm:min-h-[100%]"
              >
                <div className="box-inr h-[100%] flex flex-col justify-between pt-7 px-7 pb-5 max-xsm:px-4 max-xsm:pb-4 max-xsm:pt-4">
                  <div className="">
                    <Tilt
                      className="parallax-effect"
                      perspective={1100}
                      glareEnable={true}
                      glareMaxOpacity={0}
                      scale={1.02}
                    >
                      <img
                        className="rounded-[16px] project-img h-[300px] max-xxsm:h-[250px]"
                        src={project.imgSrc}
                        alt={project.title}
                      />
                    </Tilt>
                    <p className=" text-black text-[23px] font-medium leading-[31px] py-[11px]">
                      {project.title}
                    </p>
                    <p className=" text-[#555555] text-[17px] font-medium leading-[28px] pb-[11px]">
                      {project.description}
                    </p>
                  </div>
                  <div className="action-otr flex">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="action-inr h-[50px] overflow-hidden cursor-pointer text-[18px] font-medium font-normal leading-[30px] text-white py-[10px] px-[24px] rounded-[8px] bg-slate-950"
                    >
                      <p className="btn-default-txt">Live Preview</p>
                      <p className="pt-[11px] btn-hover-txt">Let's Go!</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
