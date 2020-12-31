import React from 'react';
import { Button } from 'reactstrap';

const SocialButton = props => {
  return (
    <Button className='text-primary text-center' color='white'>
      <span className='d-flex align-items-center justify-content-center'>
        { props.socialIcon }
        <span>{ props.text }</span>
      </span>
    </Button>
  );
};

export default SocialButton;