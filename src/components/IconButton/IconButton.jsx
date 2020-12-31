import React from 'react';

// types: primary, transparent, transparent-alt

const IconButton = props => {
  return (
    <button 
      title={ props.title }
      onClick={ props.onClick }
      className={ 
        `IconButton IconButton--${ props.type || 'secondary' } ${ props.active ? 'IconButton--active' : '' } py-1 px-2 bg-transparent m-0 ${ props.className || '' }`
      }
    >
      { props.renderIcon }
    </button>
  );
};

export default IconButton;