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
            <Button href='https://unstop.com/p/createx-2024-innovatecreateignite-mlv-textile-engineering-college-bhilwara-1201264' target='_blank' className='rules-download reg-button'>Register Now</Button>
            <span className='ebo'><h1 className='about__content__heading--white off-1'>Early Bird Offer Ends In
              <span className='ebo-container'><h1 className='about__content__heading--orange off-2'>Flat ₹20 off<span className='strikethrough'>₹100</span>₹80 /- </h1> <a className='underline' href='tel:7568379160'> ==> Contact the organizers </a></span>
            </h1>

            </span>
            <CountdownTimer targetDate='2024-11-01T23:59:59' />

          </div>
        </div>

      </div>
    </div>
  );
};

export default ScrollSection2;
