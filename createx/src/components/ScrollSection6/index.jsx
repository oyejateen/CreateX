import React from 'react';
import HashtagCreateToInnovate from '../HashtagCreateToInnovate'; // Adjust path as needed
import './ScrollSection6.scss';
import { Assets } from '../../assets';
import { CountdownTimer } from '..';

const ScrollSection6 = () => {
  return (
    <div className='about_ps scroll-section'>
      <img className='about_ps__background' src={Assets.CreateX_BG2} alt="" />
      <div className='about_ps__container'>
        
        <div className='about_ps__content'>
          <span className='about_ps__content__heading'>
            

            <h1 className='about_ps__content__heading--orange'>Problem Statements</h1>
                      
            </span>

          <p className='about_ps__content__description'>
          Problem Statements for the Projects, provided by leading industries, will be made live on the <p className='about_ps__content__description--highlight'> Orientation Day</p> and the participants will have further 5 days to select their problem statement and develop a Proposal for their proposed solution.
          </p>
          <h1 className='about_ps__content__heading--white'>Registration Begins In</h1>
          <CountdownTimer className="about_ps__content__heading" targetDate='2024-10-28T11:00:00' />
      </div>
    </div>
    </div>
  );
};

export default ScrollSection6;