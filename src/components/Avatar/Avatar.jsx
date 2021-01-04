import React from 'react';
import avatarPlaceholder from '../../assets/img/avatar-placeholder-92x92.png';

const Avatar = props => {

  const src = props.src || "";

  // Will have status prop: online, offline, none

  let width, height;
  switch (props.size) {
    default:
    case 'sm':
      width = '44';
      height = '44';
      break;
    case 'md':
      width = '50';
      height = '50';
      break;
    case 'lg':
      width = '64';
      height = '64';
      break;
  }

  return (

    <a href={ props.href } className={` ${ props.className || '' }`}>

      <img 
        src={ src === "" ? avatarPlaceholder : src } 
        width={ width } 
        height={ height } 
        alt={ props.alt } 
        className='rounded-circle'
      />

    </a>

  );
};

export default Avatar;