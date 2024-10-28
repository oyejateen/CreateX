import React from 'react';
import './EarlyBird.scss';
import { Button } from 'react-bootstrap';
import CountdownTimer from '../CountdownTimer';
import { Assets } from '../../assets';
import { BsInstagram } from 'react-icons/bs';

const EarlyBird = () => {
  return (
    <div className='about scroll-section'>
      <img className='about__background' src={Assets.CreateX_BG1} alt="" />
      <div className='about__container'>
        <div className='about__content eb-container'>
          <span className='about__content__heading'>
            <h1 className='about__content__heading--orange eb'>Early Bird Offer</h1>
          </span>
          <h1 className='about__content__heading--white'>FLAT 20% OFF</h1>
            <h1 className='about__content__heading--white'><span className='strikethrough'>₹100/-</span> ₹80/-</h1>
           
          <div className='about__content__description--container'>
            <p className='about__content__description eb-desc'>
                <a target='_blank' href='https://instagram.com/techbizzclub'>
            Checkout our pinned IG  <BsInstagram />  post for Coupon details.
            </a>
            </p>
          </div>
          <div className='about__content__description--hashtag-container ebh'>
            <Button className='reg-button rules-download' target='_blank' href='https://unstop.com/o/LYmv96q?lb=5a4Bv1YG'>Register Now</Button>
          <span className='ebo'><h1 className='about__content__heading--white ebh-off'>Early Bird Offer Ends In</h1>

</span>
          <CountdownTimer targetDate='2024-11-01T23:59:59' />

          </div>
        </div>

      </div>
    </div>
  );
};

export default EarlyBird;
