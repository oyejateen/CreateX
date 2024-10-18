import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const SponsorCard = ({
  title,
  description,
  companyName,
  imageUrl,
  socials = {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-[85.33rem] h-[33.33rem] rounded-[3.33rem] border-[5px] border-[var(--primary-color)] bg-[var(--black-color)] transition-all duration-300 relative ${
        isHovered ? "bg-[var(--primary-color)] border-[var(--primary-color)]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {!isHovered ? (
          <>
            <img
              src={imageUrl}
              alt={title}
              className="w-[20rem] h-[20rem] object-cover rounded-full flex-shrink-0"
              style={{ background: '#D9D9D9' }}
            />
            <h3 className="text-[var(--light-gray)] font-kagitingan text-[4.33rem] font-bold pt-[2rem]">{title}</h3>
          </>
        ) : (
          <div className="absolute inset-0 flex p-4">
            <div className="flex pr-4 flex flex-col w-[60%]">
              <h4 className="text-[var(--black-color)] font-kagitingan text-[4.33rem] font-bold text-left ml-[4.2rem] mt-[3rem]">{companyName}</h4>
              <p className="mt-2 font-jura text-[var(--black-color)] text-[1.6rem] text-justify pl-[4.2rem] leading-[1] ">{description}</p>
              <h3 className={`text-[var(--black-color)] font-kagitingan text-left ml-[4.2rem] text-[4.33rem] ${isHovered ? "mt-1" : ""}`}>{title}</h3>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <img
                src={imageUrl}
                alt={title}
                className="w-[20rem] h-[20rem] object-cover rounded-full flex-shrink-0 mb-4 mt-[5rem]"
                style={{ background: '#D9D9D9' }}
              />
              <div className="mt-4 flex space-x-3">
                {socials.mail && (
                  <a href={socials.mail} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-[var(--black-color)] hover:text-[var(--black-color)]" size={30} />
                  </a>
                )}
                {socials.instagram && (
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-[var(--black-color)] hover:text-[var(--black-color)]" size={30} />
                  </a>
                )}
                {socials.github && (
                  <a href={socials.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-[var(--black-color)] hover:text-[var(--black-color)]" size={30} />
                  </a>
                )}
                {socials.linkedin && (
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-[var(--black-color)] hover:text-[var(--black-color)]" size={30} />
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
