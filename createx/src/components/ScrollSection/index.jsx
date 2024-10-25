import React from 'react';
import HashtagCreateToInnovate from '../HashtagCreateToInnovate'; // Adjust path as needed
import './ScrollSection.scss';
const ScrollSection = ({ background, logo, headingWhite, headingOrange, highlightText, description }) => {
  return (
    <div className='about_createx scroll-section'>
      <img className='about_createx__background' src={background} alt="" />
      <div className='about_createx__container'>
        <div className='about_createx__content'>
          <span className='about_createx__content__heading'>
            <h1 className='about_createx__content__heading--white'>{headingWhite}</h1>
            <h1 className='about_createx__content__heading--orange'>{headingOrange}</h1>
          </span>

          <p className='about_createx__content__description'>
            <p className='about_createx__content__description--highlight'>{highlightText}</p> {description}
          </p>
          
          <div className='about_createx__content__description--hashtag-container'>
            <HashtagCreateToInnovate />
          </div>
        </div>
        <img className='about_createx__logo' src={logo} alt="" />
      </div>
    </div>
  );
};

export default ScrollSection;
