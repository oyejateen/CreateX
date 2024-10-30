import React from 'react';
import './ScrollSectionWrapper.scss'; // Assuming you merge all SCSS styles into this file


const ScrollSectionWrapper = ({ background }) => {
  return (
    <div className='scroll-container'>
      {/* Single background image for all sections */}
      <img className='background' src={background} alt="Background" />

      {/* Scrollable sections */}
      <div className='about_createx scroll-section'>
        <div className='about_createx__container'>
          <h1 className='about_createx__content__heading--white'>
            About CreateX
          </h1>
          <p className='about_createx__content__description'>
            CreateX is an immersive competition that empowers students to tackle industry challenges with innovative solutions. Over 30 days, participants will explore their potential, collaborate, and compete, leading up to a grand exhibition and recognition of their work.
          </p>
        </div>
      </div>

      <div className='about_theme scroll-section'>
        <div className='about_theme__container'>
          <h1 className='about_theme__content__heading--orange'>
            About The Theme
          </h1>
          <p className='about_theme__content__description'>
            CreateX 2024's theme inspires participants to explore their creativity, solve real-world problems, and push the boundaries of innovation. It’s a call to turn ideas into impactful solutions through technology and teamwork.
          </p>
        </div>
      </div>

      <div className='about_rules scroll-section'>
        <div className='about_rules__container'>
          <h1 className='about_rules__content__heading--orange'>
            Know About The Rules & Guidelines
          </h1>
          <p className='about_rules__content__description'>
            Ready to unleash your creativity and innovation at CreateX? Before you embark on this exciting journey, make sure to familiarize yourself with our comprehensive rulebook. Understanding the guidelines will ensure a smooth and fair participation for everyone involved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollSectionWrapper;
