import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner-container '>
      <div className=''>
        <div className='row d-flex banner align-items-center justify-content-center'>
          <MenuBar> Im menu</MenuBar>
          <div className='col-md-6'>
            <h1 className='title'>
              BE THE BEST SWIMMER IN THE CITY <br />
            </h1>
            <p className='text-white text-center mt-3'>
              Start early and make you healthy. Our super duper trainers are waiting for you
            </p>
          </div>
          <div className='col-md-6'></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
