import React from 'react';
import './ExtraTwo.css';
import image from './extra0 (1).png'

const ExtraTwo = () => {
    return (
      <div>
        <h2 className="text-center mt-5 f-bold">OUR INFO</h2>
        <div className="main-extra d-flex mt-5">
          <div className="image-extra2">
            <img className="w-100" src={image} alt="" srcset="" />
          </div>
          <div className="text-extra2">
            <h2 className='mt-5'>
              After 10 years of experiance about retailing Business ,We have already won
              <span> People's Choice </span> award!
            </h2>
          </div>
        </div>
      </div>
    );
};

export default ExtraTwo;