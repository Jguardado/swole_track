import React from 'react';
import Summary from "./summary/summary";
import Display from "./display/display";

const SummaryDisplayContainer = () => {
  return (
    <div className='summary-display-container'>
      <Summary />
      <Display />
    </div>
  )
};

export default SummaryDisplayContainer;
