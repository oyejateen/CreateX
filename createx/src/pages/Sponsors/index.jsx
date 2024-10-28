import React from "react";
import SponsorCard from "./SponsorCard/SponsorCard";
import Background from "../../assets/Images/Sponsor-Background.png";
import { SponsorsData } from './constants';
import './Sponsors.scss';

const Sponsors = () => {
  
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-full bg-black md:hidden" />
      <img
        src={Background}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-white overflow-y-auto">
        <div className="sponsor-title font-kagitingan md:ml-10 text-4xl pt-10 md:pt-20 sm:text-7xl text-2xl w-full md:w-[1300px] max-w-[90%] text-center md:text-left"
          style={{ marginTop: "4rem" }}>
          Sponsors & Partners
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mt-2 md:mt-[10rem]">
          {SponsorsData.map((sponsor, index) => (
            <SponsorCard 
              className="sponsor-card"
              key={index}
              title={sponsor.title}
              description={sponsor.description}
              companyName={sponsor.companyName}
              imageUrl={sponsor.imageUrl}
              socials={sponsor.socials}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
