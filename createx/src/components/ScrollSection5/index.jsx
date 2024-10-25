import React from 'react';
import HashtagCreateToInnovate from '../HashtagCreateToInnovate'; // Adjust path as needed
import './ScrollSection5.scss';
import { Assets } from '../../assets';
const ScrollSection5 = () => {
  return (
    <div className='about_prize scroll-section'>
      <img className='background' src={Assets.CreateX_BG2} alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default ScrollSection5;
