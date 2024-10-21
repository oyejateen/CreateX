import React from "react";
import { useState } from "react";
import {faqs} from "../../data/faqs"


const FAQs = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  return ( <>
    <div className=" pt-40 h-full overflow-hidden w-screen  flex justify-center bg-black">
        
      <div className="w-[1100px]  ">
        <div  className="text-white flex pl-16 md:text-7xl text-4xl font-bold"><h1>FAQS</h1></div>
        {faqs.map((item, i) => (
          <div key={i} className={`text-white border-black  font-medium  last:border-b-0 rounded-[40px] m-16   ${
            activeId === i ? " bg-white "  : ""
          }`}>
            <div
              className={` cursor-pointer  bg-orange-500  md:py-5 px-8 py-3 flex  justify-between rounded-full md:text-4xl text-2xl items-center `}
              onClick ={() => togglerFunction(i)}
            >
              <p className="flex md:text-4xl text-2xl font-jura justify-start">{item.title}</p>
              <span>
                {activeId === i ? (
                  <i className="fa-solid items-centre fa-angle-up"></i>
                ) : (
                  <i className="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            { activeId === i && (
              <div className={`px-5 py-4 text-lg transition-[max-height] ease-in-out overflow-hidden  flex items-center text-black justify-center ${activeId === i ? " opacity-100" : "max-h-0 opacity-0" }`}>
                <p>{item.description}</p>
              </div>
            ) }
          </div>
        ))}
      </div>
    </div>
  </>);
      };
    
    

export default FAQs;