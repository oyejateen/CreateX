import React, { useEffect, useRef, useState } from 'react';

const ScheduleCard = ({ date, title, paragraphs, isLast }) => {
  const descriptionRef = useRef(null); 
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (descriptionRef.current) {
      setLineHeight(descriptionRef.current.offsetHeight + (isLast ? 0 : 280));
    }
  }, [paragraphs, isLast]);

  return (
    <div 
      className="relative flex flex-col md:flex-row mb-8 w-full max-w-[1100px] mx-auto px-4 bg-black"
    >
      {/* Date Box */}
      <div className="flex flex-col items-center md:mr-4 z-10 mb-4 md:mb-0 w-full md:w-[30rem]">
        <div 
          className="bg-[#191919] text-white font-kagitingan rounded-[2.66rem] flex-col w-full md:max-w-[16.80rem] flex items-center justify-center py-6 md:py-4" 
          style={{
            color: 'var(--White, #E8E8E8)',
            fontSize: '2.3rem',
            fontWeight: 700,
            height: '10rem', 
          }}
        >
          {date}
          <div 
            className="bg-[#E8E8E8] w-[7.5rem] h-[0.13rem] mt-1" 
          />
        </div>
      </div>

      {/* Vertical Line and Dot */}
      <div className="relative flex flex-col items-center z-10 mx-1">
      <div 
  className={`w-[2px] bg-[#FF6E1F] absolute md:left-[-4px] left-[-14px] 
              md:top-0 top-[-11rem] ${isLast ? 'h-[40px] md:h-[${lineHeight}px - 270]' : `h-[${lineHeight}px]`}`}
  style={{ height: isLast ? '0' : `${lineHeight}px` }} 
/>
        <div 
          className="bg-[#FF6E1F] w-3 h-3 rounded-full absolute md:-left-[9px] left-[-19px] md:top-3 top-[-11rem]" 
        />
      </div>

      {/* Description Box */}
      <div 
        ref={descriptionRef} 
        className="bg-[#FF6E1F] p-4 md:p-6 rounded-lg shadow-lg flex-grow z-10 mx-2 w-full md:max-w-[900px]"
      >
        <h3 className="font-kagitingan text-white mb-2 text-4xl md:text-5xl">
          {title}
        </h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="font-jura text-white mb-2 md:mb-4 text-sm md:text-xl">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
