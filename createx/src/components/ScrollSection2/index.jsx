import React from 'react';
import HashtagCreateToInnovate from '../HashtagCreateToInnovate'; // Adjust path as needed
import './ScrollSection2.scss';
import { Button } from 'react-bootstrap';
import CountdownTimer from '../CountdownTimer';
const ScrollSection2 = ({ background, logo, headingWhite, headingOrange, description }) => {
  return (
    <div className='about scroll-section'>
      <img className='about__background' src={background} alt="" />
      <div className='about__container'>
        <div className='about__content'>
          <span className='about__content__heading'>
            <h1 className='about__content__heading--white'>{headingWhite}</h1>
            <h1 className='about__content__heading--orange'>{headingOrange}</h1>
          </span>
          <div className='about__content__description--container'>
            <p className='about__content__description'>
              {description}
            </p>
            <img className='about__logo' src={logo} alt="" />
          </div>
          <div className='about__content__description--hashtag-container'>


          </div>
        </div>

      </div>
    </div>
  );
};

export default ScrollSection2;
