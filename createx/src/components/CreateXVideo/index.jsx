import React, { useRef, useEffect } from 'react';
import { BsArrowBarDown } from "react-icons/bs";
import { Assets } from '../../assets';
import './CreateXVideo.scss';

const CreateXVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => {
      if (videoElement.currentTime >= 6) {
        videoElement.pause();
      }
    };

    videoElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className='video-container'>
        <video
        ref={videoRef}
        autoPlay
        loop={false}
        muted
        className='video'
        >
        <source src={Assets.CreateXMp4} type="video/mp4" />
        Oops! The CreateX 2024 logo video couldn&apos;t be loaded. Stay tuned for exciting updates!
        </video>
        <div className='video-text-container'>
            <h1 className='video-text'> Swipe Down</h1>
            <BsArrowBarDown className='video-icon' />
        </div>
    </div>
  );
};

export default CreateXVideo;