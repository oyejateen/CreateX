import React, { useState } from "react";
import { faqs } from "../../data/faqs";

const FAQs = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    setActiveId(activeId === index ? null : index);
  };

  return (
    <div className="py-40 overflow-hidden w-screen flex justify-center bg-black">
      <div className="w-[1100px]">
        <h1 className="text-white font-kagitingan text-[6.4rem] font-bold leading-tight text-left md:m-16 m-14">
          FAQS
        </h1>
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`text-white border-black font-medium last:border-b-0 rounded-[40px] md:m-16 m-14 overflow-hidden ${
              activeId === i ? "bg-white" : ""
            }`}
          >
            <div
              className="cursor-pointer bg-[#FF6E1F] flex justify-between items-center rounded-[40px] md:py-5 px-8 py-3 md:text-4xl font-bold text-2xl"
              onClick={() => togglerFunction(i)}
            >
              <p className="font-jura text-2xl mb-0 w-full text-left ml-4">{item.title}</p>
              <span>
                {activeId === i ? (
                  <i className="fa-solid fa-angle-up"></i>
                ) : (
                  <i className="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            <div
              className={`transition-all ease-in-out duration-500 ${
                activeId === i ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{
                transitionProperty: "max-height, opacity",
              }}
            >
              <div className="px-6 py-4 ml-5 mr-5 text-black flex items-center justify-center">
                <p className="text-[#000] font-jura text-[1.6rem] font-bold leading-normal text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
