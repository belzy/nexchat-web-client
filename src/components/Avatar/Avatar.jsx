import React from 'react';

const Avatar = props => {

  // Will have status prop: online, offline, none

  let width, height;
  switch (props.size) {
    default:
    case 'sm':
      width = '34';
      height = '34';
      break;
    case 'md':
      width = '44';
      height = '44';
      break;
    case 'lg':
      width = '54';
      height = '54';
      break;
  }

  return (

    <a href={ props.href } className={` ${ props.className || '' }`}>

      <img 
        src={ props.src } 
        width={ width } 
        height={ height } 
        alt={ props.alt } 
        className='border border-2 border-primary rounded-circle'
      />

    </a>

  );
};

export default Avatar;