import React from 'react';
import HashtagCreateToInnovate from '../HashtagCreateToInnovate'; // Adjust path as needed
import './ScrollSection5.scss';
import { Assets } from '../../assets';
import { Button } from 'react-bootstrap';

const ScrollSection5 = () => {
  return (
    <div className='about_prize scroll-section'>
      <img className='about_prize__background' src={Assets.CreateX_BG2} alt="" />
      <div className='about_prize__container'>
        
        <div className='about_prize__content'>
          <span className='about_prize__content__heading'>
            <h1 className='about_prize__content__heading--white'>Prize Pool</h1>
            <h1 className='about_prize__content__heading--orange'>₹20,000*</h1>

          </span>

          <p className='about_prize__content__description'>
          Win Cash Prizes, Certificates, Trophies and much more.
           
          </p>
          <p className='about_prize__content__description--bypass'>
          * The prize pool will be distributed amongst winners in certain categories (view the rulebook for more details).
            </p>
            <div className='about__content__description--hashtag-container'><Button href='https://unstop.com/o/LYmv96q?lb=5a4Bv1YG' target='_blank' className='rules-download reg-button'>Register Now</Button></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection5;
