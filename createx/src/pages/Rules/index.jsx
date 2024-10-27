import React from 'react';
import { Button } from 'react-bootstrap';
import { Assets } from '../../assets';
import './Rules.scss';

const Rules = () => {
  return (
    <div className='rules-page'>
      <img className='rules__background' src={Assets.CreateX_BG1} alt="" />
      <div className='rules'>
        <h2 className='rules-title'>Rules</h2>
        <p className='rules-content'> Rules are an important part of this event, as many factors depend on that. Here you can view the comprehensive Rulebook for <span className='rules-content--highlight'>CreateX 2024.</span></p>
        <Button href={Assets.Rulebook} target='_blank' className='rules-download reg-button'>View Rulebook</Button>
        </div>
    </div>
  )
}

export default Rules;