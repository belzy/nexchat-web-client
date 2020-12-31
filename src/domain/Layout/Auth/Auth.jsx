import React from 'react';
import {
  Container,
} from 'reactstrap';

const Auth = props => {
  return (
    <Container fluid className='auth d-flex flex-row'>
      <div className='d-flex flex-column justify-content-between align-items-center auth-container left'>

        <h1 className='text-white'>neXchat</h1>

        <div className='auth-intro d-flex flex-column justify-content-center'>
          <i className='fas fa-comment-alt text-center text-white mb-3' style={{ fontSize: '68px' }}/>
          <h2 className='text-white text-center'>Ready To Chat?</h2>
          <p className='text-white text-center'>Log in or sign up for an account to get started. Invite your friends, create chat rooms, and engage in 1 on 1 chats with all of your friends online. Welcome to the greatest chat app in the world!</p>
        </div>
        <span className='text-white'>© 2020</span>

        </div>

        <div className='auth-container right'>
        { props.children }
      </div>
    </Container>
  );
};

export default Auth;

