import React from 'react';
import './BackToTop.css'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bgc'> 
    <button className="border text-dark back-to-top-button" onClick={scrollToTop}>
    <i className=" mx-2 text-dark fa-solid fa-up-long"></i>
      Back to top
    </button>
    </div>
   
  );
};

export default BackToTop;