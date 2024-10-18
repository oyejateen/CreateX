import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import './SponsorCard.css'; 

const SponsorCard = ({
  title,
  description,
  companyName,
  imageUrl,
  socials = {}
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`sponsor-card`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default view with centered image and title */}
      <div className="flex flex-col items-center justify-center h-full">
        {!isHovered ? (
          <>
            <img
              src={imageUrl}
              alt={title}
              className="w-[20rem] h-[20rem] object-cover rounded-full flex-shrink-0"
              style={{ background: '#D9D9D9' }} // Set background color
            />
            <h3 className="sponsor-title font-kagitingan mt-4">{title}</h3> {/* Title below image */}
          </>
        ) : (
          <div className="sponsor-hover">
          {/* Left Column */}
          <div className="flex-1 pr-4 flex flex-col">
            <h4 className="sponsor-company font-kagitingan">{companyName}</h4>
            <p className={`mt-2 font-jura sponsor-description`}>{description}</p>
            
            {/* Ensure title is at the bottom */}
            <h3 className={`sponsor-title font-kagitingan ${isHovered ? "hover-title" : ""}`}>{title}</h3>
          </div>
        
          {/* Right Column */}
<div className="flex-1 flex flex-col items-center">
  <img
    src={imageUrl}
    alt={title}
    className="w-[20rem] h-[20rem] object-cover rounded-full flex-shrink-0 mb-4 mt-14" // Add margin top for padding
    style={{ background: '#D9D9D9' }} // Set background color
  />
  
  {/* Social Icons */}
  <div className="mt-4 flex space-x-3">
    {socials.mail && (
      <a href={socials.mail} target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="text-black hover:text-black" size={30} />
      </a>
    )}
    {socials.instagram && (
      <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-black hover:text-black" size={30} />
      </a>
    )}
    {socials.github && (
      <a href={socials.github} target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-black hover:text-black" size={30} />
      </a>
    )}
    {socials.linkedin && (
      <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-black hover:text-black" size={30} />
      </a>
    )}
  </div>
</div>

        </div>
        

        )}
      </div>
    </div>
  );
};

export default SponsorCard;
