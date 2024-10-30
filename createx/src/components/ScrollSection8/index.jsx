import React from 'react';
import HashtagCreateToInnovate from '../HashtagCreateToInnovate'; // Adjust path as needed
import './ScrollSection8.scss';
import Footer from '../Footer';
import { IconContext } from "react-icons";
import { BsLink45Deg } from "react-icons/bs";
import { Button } from 'react-bootstrap';

import { Assets } from '../../assets';
const ScrollSection8 = () => {
  return (
    <div className='about_contact scroll-section'>
      <img className='about_contact__background' src={Assets.CreateX_BG4} alt="" />
      <div className='about_contact__container'>
        <div className='about_contact__content'>
          <span className='about_contact__content__heading'>

            <h1 className='about_contact__content__heading--orange'>Contact Us</h1>
          </span>

          <p className='about_contact__content__description'>
          Whether you want to connect with us regarding Sponsorship, partnership or if you have any queries, we are eager to connect and collaborate with you!
          </p>

          <div className='about_contact__content__description--hashtag-container'>
          <Button href='/contact' className='rules-download reg-button'>Contact Us</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ScrollSection8;
