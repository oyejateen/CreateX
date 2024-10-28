import React, { useState, useEffect } from "react";
import { FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import PropTypes from "prop-types";
import "./SponsorCard.scss";

const SponsorCard = ({
  title,
  description,
  companyName,
  imageUrl,
  socials = {},
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
  className={`w-[20rem] sm:w-[30rem] md:w-[50rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem] ${
    isMobile ? "h-auto sponsor-card" : "h-[33.33rem]"
  } rounded-[3.33rem] border-[5px] transition-all duration-300 relative ${
    isHovered || isMobile ? "bg-primary border-primary text-black" : "bg-black border-primary"
  }`}
  onMouseEnter={() => !isMobile && setIsHovered(true)}
  onMouseLeave={() => !isMobile && setIsHovered(false)}
>

      <div className="flex flex-col items-center justify-center h-full">
        {/* Mobile */}
        {isMobile ? (
  <div className="flex flex-col p-4 space-y-4"
  style={{ backgroundColor: "#FF6E1F", borderRadius: "3rem"}}>
    <h3 className="text-[var(--black-color)] font-kagitingan text-[2rem] text-left pt-4 pb-2">
      {title}
    </h3>
    <div className="flex justify-center mb-4">
      <img
        src={imageUrl}
        alt="Image"
        className=" w-[10rem] h-[10rem] object-cover rounded-full"
        style={{ background: "#FFFFFF", padding: "2rem" }}
      />
    </div>
    <h4 className="text-[var(--black-color)] font-kagitingan text-[2rem] font-bold text-left">
      {companyName}
    </h4>
    <p className="font-jura text-[var(--black-color)] text-[1.2rem] text-justify leading-[1.3] flex-grow">
      {description}
    </p>
    
    <div className="flex justify-center space-x-4 pt-4 pb-6">
      {socials.mail && (
        <a
          href={socials.mail}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={30} className="text-[var(--black-color)]" />
        </a>
      )}
      {socials.instagram && (
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={30}
            className="text-[var(--black-color)]"
          />
        </a>
      )}
      {socials.github && (
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe size={30} className="text-[var(--black-color)]" />
        </a>
      )}
      {socials.linkedin && (
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="text-[var(--black-color)]" />
        </a>
      )}
    </div>
  </div>
        )
        
        : (
          <>
            {/* Desktop*/}
            <div
              className={`absolute inset-0 flex ${
                isHovered ? "p-4" : "justify-center"
              } items-center`}
              style={  isHovered?({ backgroundColor: "#FF6E1F", borderRadius: "3rem"}): ({ backgroundColor: "transparent"})}
            >
              {isHovered ? (
                <div className="flex pr-4 flex-col w-[60%] h-full"
                >
                  <h4 className="text-[var(--black-color)] font-kagitingan text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.33rem] font-bold text-left ml-[1rem] md:ml-[2rem] lg:ml-[3rem] mt-[2rem]">
                    {companyName}
                  </h4>

                  <p className="flex-grow mt-2 font-jura text-[var(--black-color)] text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] text-justify pl-[1rem] md:pl-[2rem] lg:pl-[3rem] leading-[1.2]">
                    {description}
                  </p>

                  <h3 className="text-[var(--black-color)] font-kagitingan text-left ml-[1rem] md:ml-[2rem] lg:ml-[3rem] text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.33rem] mt-1">
                    {title}
                  </h3>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <img
                    src={imageUrl}
                    alt={title}
                    className=" ss w-[10rem] md:w-[15rem] lg:w-[20rem] h-[10rem] md:h-[15rem] lg:h-[20rem] object-cover rounded-full"
                    style={{ background: "#E8E8E8" }}
                  />
                  <h3 className="text-[var(--light-gray)] font-kagitingan text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.33rem] font-bold pt-[2rem]">
                    {title}
                  </h3>
                </div>
              )}

              {isHovered && (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <img
                    src={imageUrl}
                    alt={title}
                    className=" ss w-[10rem] md:w-[15rem] lg:w-[20rem] h-[10rem] md:h-[15rem] lg:h-[20rem] object-cover rounded-full mb-4 mt-[2rem]"
                    style={{ background: "#FFFFFF"}}
                  />
                  <div className="mt-4 flex space-x-3">
                    {socials.mail && (
                      <a
                        href={socials.mail}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEnvelope
                          size={30}
                          className="text-[var(--black-color)]"
                        />
                      </a>
                    )}
                    {socials.instagram && (
                      <a
                        href={socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram
                          size={30}
                          className="text-[var(--black-color)]"
                        />
                      </a>
                    )}
                    {socials.github && (
                      <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe
                          size={30}
                          className="text-[var(--black-color)]"
                        />
                      </a>
                    )}
                    {socials.linkedin && (
                      <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin
                          size={30}
                          className="text-[var(--black-color)]"
                        />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

SponsorCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  socials: PropTypes.shape({
    mail: PropTypes.string,
    instagram: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

SponsorCard.defaultProps = {
  socials: {},
};

export default SponsorCard;
