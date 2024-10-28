import React from 'react';

const ScheduleCard = ({ date, title, paragraphs }) => {
  return (
    <div className="relative flex mb-8 w-full max-w-[1100px] mx-auto pl-8 md:pl-16">
      {/* Date Box */}
      <div className="flex flex-col items-center mr-4 z-10">
        <div className="bg-white text-black font-jura px-4 py-3 rounded-md text-sm md:text-base lg:text-lg w-[100px] h-[40px] flex items-center justify-center">
          {date}
        </div>
      </div>

      {/* Vertical Line and Dot */}
      <div className="relative flex flex-col items-center z-10 mx-2">
        <div 
          className="w-[2px] bg-[#FF6E1F] absolute left-[-4px]"
          style={{ height: 'calc(100% + 33px)', top: '0' }} 
        />
        <div 
          className="bg-[#FF6E1F] w-3 h-3 rounded-full absolute -left-[9px] top-3" 
        />
      </div>

      {/* Description Box */}
      <div className="bg-[#FF6E1F] p-4 md:p-6 rounded-lg shadow-lg flex-grow z-10 mx-2 w-full max-w-[900px]">
        <h3 className="font-kagitingan text-lg md:text-2xl text-white mb-2">{title}</h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="font-jura text-white mb-2 md:mb-4 text-sm md:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
