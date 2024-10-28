import React from 'react';
import { Assets } from '../../assets';
import { HashtagCreateToInnovate, ScrollSection, ScrollSection2, ScrollSection3, ScrollSection5, ScrollSection6, ScrollSection7, ScrollSection8, CreateXVideo, EarlyBird } from '../../components';
import Footer from '../../components/Footer';


const Home = () => {
  return (
    <div className='scroll-container'>
      <div className='scroll-section'>
        <CreateXVideo />
      </div>

      <ScrollSection
      className='scroll-section'
        background={Assets.CreateX_BG1}
        logo={Assets.CreateXWhite}
        headingWhite="About"
        headingOrange="CreateX"
        highlightText="CreateX"
        description="is an immersive competition that empowers students to tackle industry challenges with innovative solutions. Over 30 days, participants will explore their potential, collaborate, and compete, leading up to a grand exhibition and recognition of their work."
      />
      <EarlyBird className='scroll-section' />
      {/* Additional sections with different content */}
      <ScrollSection2
      className='scroll-section'
        background={Assets.CreateX_BG1}
        logo={Assets.CreateXWhite}
        headingWhite="About The Theme"
        headingOrange="Igniting Your Passion For Creation"
        description="CreateX 2024's theme,  inspires participants to explore their creativity, solve real-world problems, and push the boundaries of innovation. It’s a call to turn ideas into impactful solutions through technology and teamwork."
      />

      <ScrollSection3
        background={Assets.CreateX_BG1}
        headingOrange="Know About The Rules & Guidelines"
        description="Ready to unleash your creativity and innovation at CreateX? Before you embark on this exciting journey, make sure to familiarize yourself with our comprehensive rulebook. Understanding the guidelines will ensure a smooth and fair participation for everyone involved."
      />
      <ScrollSection5 />
      <ScrollSection6 />
      <ScrollSection7
        background={Assets.CreateX_BG3}
        logo={Assets.TechBizzClubDark}
        headingOrange="About Tech Bizz Club"
        websiteUrl="https://sag.mlvti.ac.in/clubs/tech-bizz-club"
        description="A community created by students for students, Tech Bizz Club places an emphasis on the intellectual, technical, and general growth of members by planning events that encourage students to learn about technology and build original projects utilising cutting-edge tools. Hackathons, project marathons, and interesting events are among the objectives of Tech Bizz."
      />
      <ScrollSection7
        background={Assets.CreateX_BG3}
        logo={Assets.MLVTEC}
        headingOrange="About M.L.V.T.E.C."
        websiteUrl="https://mlvti.ac.in"
        description="Manikya Lal Verma Textile & Engineering College, Bhilwara is a premier Engineering college affiliated to RTU, Kota. It is one of the leading colleges in India in the field of Textile and engineering. MLVTEC is dedicated to providing real-world experience to its students."
      />
      <ScrollSection8 />
      
    </div>
  );
};

export default Home;
