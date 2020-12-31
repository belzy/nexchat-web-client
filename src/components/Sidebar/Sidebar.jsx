import React from 'react';

const Sidebar = props => {
  return (
    <div className='Sidebar bg-secondary h-100 p-3'>

      { props.children }

    </div>
  );
};

export default Sidebar;