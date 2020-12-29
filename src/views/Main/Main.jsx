import React from 'react';

/**
 * 
 * 
 * 
 */


const Main = props => {
  
  return (
    <div className='Main vw-100 vh-100 d-flex flex-column-reverse flex-xl-row overflow-hidden'>

      <nav className='Main__navbar'>

      </nav>

      <div className='Main__sidebar bg-secondary h-100'>

      </div>

      <div className='Main__main Main__main--show flex-xl-grow-1 d-flex flex-column bg-white'>

        <div className='Main__topbar border-bottom border-1 border-secondary'></div>

        <div className='flex-grow-1'>

        </div>

      </div>

      <div className='Main__menu Main__menu--hide d-flex flex-column bg-white'>

        <div className='Main__topbar border-bottom border-1 border-secondary'></div>

        <div className='flex-grow-1'></div>
      </div>

    </div>
  );
};

export default Main;