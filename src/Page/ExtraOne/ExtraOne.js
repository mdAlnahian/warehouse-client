import React from 'react';
import './ExtraOne.css'
import image from './extra1.png'

const ExtraOne = () => {
    return (
      <div>
        <h2 className="text-center mt-5 f-bold">DHAMAKA OFFER</h2>
        <div className="main-extra d-flex mt-5">
          <div className="text-extra1">
            <h2>
              Grab Your Favourite Iphone as We are providing 20% Special
              <br />
              <span> Eid Offer</span> do Hurry Up !!
            </h2>
          </div>
          <div className="image-extra1">
            <img className="w-100" src={image} alt="" srcset="" />
          </div>
        </div>
      </div>
    );
};

export default ExtraOne;