import React, { useState, useEffect } from 'react';
import './CountdownTimer.scss';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = value => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="countdown-timer">
      <div className="timer">
        <div className="time-block">
            <div className='time-container'>
          <span className='time-number'>{addLeadingZero(timeLeft.days)}</span>
          <p className='timer-heading'>Days</p>
          </div>
        </div>
        <h1 className='colon'>:</h1>
        <div className="time-block">
        <div className='time-container'>
          <span className='time-number'>{addLeadingZero(timeLeft.hours)}</span>
          <p className='timer-heading'>Hours</p>
          </div>
        </div>
        <h1 className='colon'>:</h1>
        <div className="time-block">
        <div className='time-container'>
          <span className='time-number'>{addLeadingZero(timeLeft.minutes)}</span>
          <p className='timer-heading'>Minutes</p>
          </div>
        </div>
        {/* <h1 className='colon'>:</h1>
        <div className="time-block">
        <div className='time-container'>
          <span className='time-number'>{addLeadingZero(timeLeft.seconds)}</span>
          <p className='timer-heading'>Seconds</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CountdownTimer;