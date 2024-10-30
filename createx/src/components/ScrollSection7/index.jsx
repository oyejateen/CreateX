import React from 'react';
import HashtagCreateToInnovate from '../HashtagCreateToInnovate'; // Adjust path as needed
import './ScrollSection7.scss';
import { IconContext } from "react-icons";
import { BsLink45Deg } from "react-icons/bs";
const ScrollSection7 = ({ background, logo, headingOrange, description, websiteUrl }) => {
  return (
    <div className='about_tech-bizz scroll-section'>
      <img className='about_tech-bizz__background' src={background} alt="" />
      <div className='about_tech-bizz__container'>
        <div className='about_tech-bizz__content'>
          <span className='about_tech-bizz__content__heading'>

            <h1 className='about_tech-bizz__content__heading--orange'>{headingOrange}</h1>
          </span>

          <p className='about_tech-bizz__content__description'>
            {description}
          </p>

          <div className='about_tech-bizz__content__description--hashtag-container'>
            <p className='about_tech-bizz__content__description--bypass '> <a href={websiteUrl}> <IconContext.Provider value={{ color: "orange", className: "global-class-name" }}></IconContext.Provider> <span><BsLink45Deg />
            </span> <h3>{websiteUrl} </h3></a></p>
          </div>
        </div>
        <img className='about_tech-bizz__logo' src={logo} alt="" />
      </div>
    </div>
  );
};

export default ScrollSection7;
